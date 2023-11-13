export interface Post {
  title: string,
  overview: string,
  content: any,
  slug: {
    current: string,
  },
  _id: string,
  _createdAt: string
}