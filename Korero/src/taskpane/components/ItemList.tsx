import * as React from 'react';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { IListItem } from '../../services/IListItem';

export interface ItemListProps {
    items: IListItem[];
    click: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, data: IListItem) => Promise<void>;
}

export default class ItemList extends React.Component<ItemListProps> {
    render() {
        const {
            items
        } = this.props;

        const greetings = this.getItemsByCategory(items, 'greeting');

        const signoffs = this.getItemsByCategory(items, 'sign-off');

        return (
            <main>
                <div id='welcome'>
                    <p>Kōrero is an add-in that lets you insert common greetings and sign-off's into your messages.</p>
                </div>
                <Pivot className='pivotContainer'>
                    <PivotItem headerText="Greetings">
                        <div className='ms-u-slideUpIn10'>
                            {greetings}
                        </div>
                    </PivotItem>
                    <PivotItem headerText="Sign-offs">
                        <div className='ms-u-slideUpIn10'>
                            {signoffs}
                        </div>
                    </PivotItem>
                </Pivot>
            </main>
        );
    }

    private getItemsByCategory(items: IListItem[], category: string) {
        return items.filter((item) => {
            return (item.category === category);
        }).map((item, index) => (<div className='listItem' key={index}>
            <div className='titleContainer' onClick={((e) => this.props.click(e, item))}>
                <div className='title trimEllipsis ms-font-m ms-font-weight-regular ms-font-color-neutralPrimary'>{item.primaryText}</div>
            </div>
            <div className='itemPreviewContent  ms-font-s ms-font-weight-semilight ms-font-color-neutralSecondary'>{item.translationText}</div>
        </div>));
    }
}
