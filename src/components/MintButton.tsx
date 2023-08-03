import {
  useAccount,
  useBalance,
  // usePrepareContractWrite,
  useContractWrite,
  // useWaitForTransaction
} from 'wagmi'

const MintButton = () => {

  // const { write } = useContractWrite({
  //   address: '', // todo: update address
  //   abi: [
  //     {
  //       name: 'mint',
  //       type: 'function',
  //       stateMutability: 'nonpayable',
  //       inputs: [],
  //       outputs: [],
  //     },
  //   ],
  //   functionName: 'mint',
  // })

  // const { address } = useAccount()
  // const { data } = useBalance({ address })
  // const balance = data?.formatted
  // const insufficientBalance = balance < 1

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '4vh',
          // fit: 'contain',
          marginLeft: '0px',
          width: '100%'
        }}
      >
        <button
          style={{
            // fontColor: '#FFFFFF',
          }}
          // disabled={insufficientBalance}
          disabled={true}
          // onClick={() => write()}
        >
          {/* {
            insufficientBalance ? `Insufficient Funds`
              : `Mint Bruja`
          } */}
          { `Coming Soon...`  }
        </button>
      </div>
    </div>
  );
};

export default MintButton;