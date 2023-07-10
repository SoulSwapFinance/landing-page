import { ConnectKitButton } from 'connectkit';
import { useAccount } from 'wagmi';

const WalletConnect = () => {

  const { address, isConnecting, isDisconnected } = useAccount();
  return (
    <div
      // style={{
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      //   height: '100vh',
      // }}
    >
      <ConnectKitButton
        showBalance={true}
      />
      {/* { address && <div> Connected Wallet: {address} </div> } */}
    </div>

  );
};

export default WalletConnect;
