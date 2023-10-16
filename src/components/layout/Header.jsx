import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '@/services';
import { ModeToggle } from '@/components/ui/toggleMode';
import siteConfig from '../../../config/site';
import { useRouter } from 'next/router';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const routerNav = useRouter();

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mb-8 ">
      <div className="border-b border-blue-400">
        <div className="w-full py-8 flex justify-between items-center">
          <div className="">
            <Link href="/">
              <span className="cursor-pointer font-bold text-xl ">{siteConfig.title}</span>
            </Link>
          </div>
          <ModeToggle />
        </div>
        <div className="text-center pb-6">
          <Link href="/">
            <span
              className={`mx-3 font-semibold ${
                routerNav.asPath === '/' ? 'dark:text-white text-black' : ''
              } transition-colors duration-300 hover:text-foreground/80 text-foreground/60`}
            >
              Trang chủ
            </span>
          </Link>
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span
                className={`mx-3 font-semibold p-1 inline-block ${
                  routerNav.asPath === `/category/${category.slug}` ? 'dark:text-white text-black' : ''
                } transition-colors duration-300 hover:text-foreground/80 text-foreground/60`}
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
