import * as React from 'react';
import Progress from './Progress';
import Welcome from './Welcome';
import ItemList from './ItemList';
import IDataProvider from '../../services/IDataProvider';
import MockListItemsDataProvider from '../../services/MockListItemsDataProvider';
import { IListItem } from '../../services/IListItem';
import ConfigProvider from '../../services/ConfigProvider';
import IConfigProvider from '../../services/IConfigProvider';

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
  isFirstRun: boolean;
}

export interface AppState {
  isFirstRun: boolean;
  listItems: IListItem[];
}

export default class App extends React.Component<AppProps, AppState> {
  private _dataProvider: IDataProvider;
  private _configProvider: IConfigProvider;

  constructor(props, context) {
    super(props, context);
    this._dataProvider = new MockListItemsDataProvider();
    this._configProvider = new ConfigProvider();

    this.state = {
      isFirstRun: props.isFirstRun,
      listItems: []
    };
  }

  //ā, ē, ī, ō, ū, Ā, Ē, Ī, Ō and Ū.
  public componentDidMount() {
    this._dataProvider.getGreetingsAndSignoffs().then((data: IListItem[]) => {
      let config = this._configProvider.getConfig();
      let _isFirstRun: boolean = true;
      if(config.isFirstRun !== undefined)
      {
        _isFirstRun = config.isFirstRun;
      }
      this.setState({
        isFirstRun: _isFirstRun,
        listItems: data
      });
    })
  }

  public click(event: React.MouseEvent<HTMLDivElement, MouseEvent>, data: IListItem): void {
    console.log("Doing insert" + event + data);
    /**
    * Insert your Outlook code here
    */
    Office.context.mailbox.item.body.getTypeAsync((result) => {
      if (result.status == Office.AsyncResultStatus.Failed) {
        console.log(result.error.message);
      }
      if (result.value == Office.CoercionType.Html) {
        Office.context.mailbox.item.body.setSelectedDataAsync('<span title="' + data.translationText + '">' + data.primaryText + '</span>', { coercionType: Office.CoercionType.Html }, (result) => {
          if (result.status != Office.AsyncResultStatus.Succeeded) {
            console.log('An error occurred inserting the HTML text.');
          };
        })
      } else {
        Office.context.mailbox.item.body.setSelectedDataAsync(data.primaryText, { coercionType: Office.CoercionType.Text }, (result) => {
          if (result.status != Office.AsyncResultStatus.Succeeded) {
            console.log('An error occurred inserting the plain text.');
          };
        })
      }
    });
  }

  public render() {
    const {
      isOfficeInitialized
    } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress
          message='Loading greetings and sign-offs.'
        />
      );
    }

    if(this.state.isFirstRun){
      return (
        <Welcome title='Welcome' message='Welcome message' click={() => {this._configProvider.setConfig({isFirstRun: false}, (() => {this.setState({isFirstRun:false})}))}} />
      );
    }
    

    return (
      <div className='ms-welcome'> 
        <ItemList items={this.state.listItems} click={this.click.bind(this)} ></ItemList>
      </div>
    );
  }
}
