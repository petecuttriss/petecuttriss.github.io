import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react';

export interface WelcomeProps {
    message: string;
    title: string;
    click: () => void;
}

export default class Welcome extends React.Component<WelcomeProps> {
    render() {
        return (
            <div id='welcomeView' className='container'>
                <div id='welcome'>
                    <p>Kōrero is an add-in that lets you insert common greetings and sign-off's into your messages.</p>
                </div>
                <div id='continue'>
                    <DefaultButton
                        data-automation-id="test"
                        allowDisabledFocus={true}
                        text="Continue"
                        onClick={this.props.click}
                    />
                </div>
            </div>
        );
    }
}
