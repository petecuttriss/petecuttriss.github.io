import { IListItem } from './IListItem';
import IDataProvider from './IDataProvider';

export default class MockListItemsDataProvider implements IDataProvider {

    //ā, ē, ī, ō, ū, Ā, Ē, Ī, Ō and Ū.
    private _data: IListItem[] = [
        {
            category: 'greeting',
            primaryText: 'Tēnā koe',
            translationText: 'Dear (to one)'
        },
        {
            category: 'greeting',
            primaryText: 'Tēnā kōrua',
            translationText: 'Dear (to two)'
        },
        {
            category: 'greeting',
            primaryText: 'Tēnā koutou',
            translationText: 'Dear (to three or more)'
        },
        {
            category: 'greeting',
            primaryText: 'Kia ora',
            translationText: 'Hi (to one)'
        },
        {
            category: 'greeting',
            primaryText: 'Kia ora kōrua',
            translationText: 'Hi (to two)'
        },
        {
            category: 'greeting',
            primaryText: 'Kia ora koutou',
            translationText: 'Hi (to three or more)'
        },
        {
            category: 'greeting',
            primaryText: 'Kia ora e hoa (informal)',
            translationText: 'Hi to a friend'
        },
        {
            category: 'greeting',
            primaryText: 'Kia ora e te whānau',
            translationText: 'Hi family'
        },
        {
            category: 'greeting',
            primaryText: 'Tēnā koe e hoa (formal)',
            translationText: 'Greetings to a friend'
        },
        {
            category: 'greeting',
            primaryText: 'Kei te rangatirea, tēnā koe (very formal)',
            translationText: 'Dear Sir/Madam'
        },
        {
            category: 'greeting',
            primaryText: 'Mōrena / At a mārie',
            translationText: 'Good morning'
        },
        {
            category: 'sign-off',
            primaryText: 'Ngā mihi nui',
            translationText: 'Kind regards'
        },
        {
            category: 'sign-off',
            primaryText: 'Nāku, nā',
            translationText: 'Yours faithfully (one person signing)'
        },
        {
            category: 'sign-off',
            primaryText: 'Nāku noa, nā',
            translationText: 'Yours sincerely (one person signing)'
        },
        {
            category: 'sign-off',
            primaryText: 'Nā māua noa, nā',
            translationText: 'Yours sincerely (two people signing)'
        },
        {
            category: 'sign-off',
            primaryText: 'Nā mātou noa, nā',
            translationText: 'Yours sincerely (three or more people signing)'
        },
        {
            category: 'sign-off',
            primaryText: 'Nāku iti nei, nā',
            translationText: 'Humbly yours (one person signing)'
        },
        {
            category: 'sign-off',
            primaryText: 'Ngā mihi',
            translationText: 'Regards (one or more people signing)'
        },
        {
            category: 'sign-off',
            primaryText: 'Nāku i runga i aku mihi ki a koe',
            translationText: 'Yours with thanks (one person signing)'
        },
        {
            category: 'sign-off',
            primaryText: 'Hei konei / konā rā',
            translationText: 'Goodbye'
        },
        {
            category: 'sign-off',
            primaryText: 'Hei konā (mai)',
            translationText: 'Goodbye (for now)'
        },
        {
            category: 'sign-off',
            primaryText: 'Hei konā mai i roto i ngā mihi',
            translationText: 'Goodbye and thank you'
        },
        {
            category: 'sign-off',
            primaryText: 'Ngā manaakitanga',
            translationText: 'With best wishes/take care'
        },
        {
            category: 'sign-off',
            primaryText: 'Kia ora',
            translationText: 'Thanks'
        },
        {
            category: 'sign-off',
            primaryText: 'Kia ora rawa atu',
            translationText: 'Many thanks'
        },
        {
            category: 'sign-off',
            primaryText: 'Noho ora mai (rā)',
            translationText: 'All the best/May you be well'
        },
        {
            category: 'sign-off',
            primaryText: 'Nāku me ngā mihi (nui), nā',
            translationText: 'Yours with (many) regards (one person signing)'
        },
        {
            category: 'sign-off',
            primaryText: 'Hei āpopo',
            translationText: 'See you tomorrow'
        },
        {
            category: 'sign-off',
            primaryText: 'Ka kite (anō)',
            translationText: 'See you (again)'
        }
    ];
    //ā, ē, ī, ō, ū, Ā, Ē, Ī, Ō and Ū.

    public getGreetingsAndSignoffs(): Promise<IListItem[]> {
        let listItems: IListItem[] = this._data;

        return Promise.resolve(listItems);
    }
}