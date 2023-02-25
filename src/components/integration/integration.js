import Link from 'next/link'

const KiwifyLink = () => {
  return (
    <Link href="https://dashboard.kiwify.com.br/apps/webhooks/integrations" target="_blank">
      Kiwify
    </Link>
  );
};

const HotmartLink = () => {
    return (
        //open link in a new tab
        <Link href="https://app-vlc.hotmart.com/tools/webhook/" target="_blank">
            Hotmart
        </Link>
    );
};

export { KiwifyLink, HotmartLink };
