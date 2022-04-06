import S from '@sanity/desk-tool/structure-builder'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default () =>
  S.list()
    .title('Content')
    .items([
      // Minimum required configuration
      orderableDocumentListDeskItem({type: 'post', title: 'post'}),
      orderableDocumentListDeskItem({type: 'project', title: 'project'}),
     

    ])