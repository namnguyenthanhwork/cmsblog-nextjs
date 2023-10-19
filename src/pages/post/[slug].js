import React from 'react';
import { useRouter } from 'next/router';

import { PostDetail, Comments, CommentsForm, Loader, PageMetadata } from '../../components';
import { getPosts, getPostDetails } from '@/services';
import { AdjacentPosts } from '@/sections';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <PageMetadata title={post.title} description={post.excerpt} />
      <div className="container px-10 mb-8">
        <div className="flex flex-col w-12/12 mx-auto lg:w-9/12">
          <PostDetail post={post} />
          <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
