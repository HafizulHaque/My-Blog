export interface Post {
  title: string,
  overview: string,
  content: string,
  slug: {
    current: string,
  },
  _id: string,
  _createdAt: string
}