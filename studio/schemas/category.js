import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
  name: 'category',
  title: 'Projects',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'string'}),
    
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'title1',
      title: 'Title1',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
