import Image from 'next/image';

const KiwifyIcon = () => {
    return (<div>
      <Image src="/Kiwify.svg" alt="My Icon" width={20} height={20} />
    </div>
    );
};

const HotmartIcon = () => {
    return (<div>
      <Image src="/Hotmart.svg" alt="My Icon" width={20} height={20} />
    </div>
    );
};

const FacebookIcon = () => {
    return (<div>
      <Image src="/Facebook.svg" alt="My Icon" width={20} height={20} />
    </div>
    );
};

const EvermartIcon = () => {
    return (<div>
      <Image src="/Evermart.svg" alt="My Icon" width={20} height={20} />
    </div>
    );
};
export { KiwifyIcon, HotmartIcon, FacebookIcon, EvermartIcon };
