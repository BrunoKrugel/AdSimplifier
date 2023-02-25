import Image from 'next/image';

const KiwifyIcon = (props) => {
  return (
    <div>
      <Image
        src="/Kiwify.svg"
        alt="My Icon"
        width={props.size}
        height={props.size}
      />
    </div>
  );
};

const HotmartIcon = (props) => {
  return (
    <div>
      <Image
        src="/Hotmart.svg"
        alt="My Icon"
        width={props.size}
        height={props.size}
      />
    </div>
  );
};

const FacebookIcon = (props) => {
  return (
    <div>
      <Image
        src="/Facebook.svg"
        alt="My Icon"
        width={props.size}
        height={props.size}
      />
    </div>
  );
};

const EvermartIcon = () => {
  return (
    <div>
      <Image src="/Evermart.svg" alt="My Icon" width={20} height={20} />
    </div>
  );
};
export { KiwifyIcon, HotmartIcon, FacebookIcon, EvermartIcon };
