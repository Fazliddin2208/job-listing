import Link from "next/link";
import style from '@/style/not-found.module.scss'

export default function NotFound() {
  return (
    <>
      <div className={style.gif}>
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div className={style.content}>
        <h1 className={style.mainHeading}>Ooops! This page is gone.</h1>
        <p>
          ...maybe the page you're looking for is not found or never existed.
        </p>
        <Link href="/">
          <button>
            Back to home <i class="far fa-hand-point-right"></i>
          </button>
        </Link>
      </div>
    </>
  );
}
