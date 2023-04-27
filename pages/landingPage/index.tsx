import classes from "./Landing.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
const LandingPage = () => {
  const router = useRouter();
  return (
    <section className={classes.landing__section}>
      <header className={classes.landing}>
        <div className={classes.left}>
          <h1 className={classes.h1}>
            <span className={classes.span}>Get </span>
            the answers you need, wherever you are.{" "}
            <span className={classes.span}> Connect </span> with your
            <span className={classes.span}> tutors </span>
            from around the world and ask your questions in
            <span className={classes.span}> real-time.</span>
          </h1>
          <div className={classes.btn__box}>
            <button
              className={`${classes.btn} ${classes.btn__primary}`}
              onClick={() => router.push("/login")}
            >
              Login
            </button>
            <button
              className={`${classes.btn} ${classes.btn__secondary}`}
              onClick={() => router.push("/signup")}
            >
              Register
            </button>
            <span className="ml-7 text-5xl">to continue.</span>
          </div>
        </div>
        <div className={classes.right}>
          <figure className={classes.figure__1}>
            <Image
              src="/assets/landing.jpg"
              alt="blog"
              width={300}
              height={700}
            />
          </figure>
          <figure className={classes.figure__2}>
            <Image
              src="/assets/landing.jpg"
              alt="blog"
              width={300}
              height={700}
            />
          </figure>
          <figure className={classes.figure__3}>
            <Image
              src="/assets/landing.jpg"
              alt="blog"
              width={300}
              height={700}
            />
          </figure>
        </div>
      </header>
    </section>
  );
};
export default LandingPage;
