import { useRouter } from 'next/router';
import Link from 'next/link';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  return (
    <div>
      {locales?.map((lng) => (
        lng !== locale && (
          <Link key={lng} href={asPath} locale={lng}>
            <button>{lng.toUpperCase()}</button>
          </Link>
        )
      ))}
    </div>
  );
};

export default LanguageSwitcher;
