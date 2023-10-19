import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const PostCard = ({ post }) => (
  <Card className="my-4">
    <CardHeader>
      <Link href={`/post/${post.slug}`}>
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          width={1200}
          height={630}
          className="object-top w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
        />
        <CardTitle className="text-xl mt-4">{post.title}</CardTitle>
      </Link>
    </CardHeader>
    <CardContent>
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={post.author.photo.url} />
          <AvatarFallback>{post.author.name}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold leading-none">{post.author.name}</p>
          <p className="text-sm text-muted-foreground mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </p>
        </div>
      </div>
      <CardDescription className="mt-3">{post.excerpt}</CardDescription>
    </CardContent>
    <CardFooter>
      <Link href={`/post/${post.slug}`}>
        <Button>Continue Reading</Button>
      </Link>
    </CardFooter>
  </Card>
);

export default PostCard;
