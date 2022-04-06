
import {getProviders, signIn as SignIntiProvider} from 'next-auth/react'
import Header from '../../components/Header';

function signIn({providers}) {
  return (
    <div className='bg-gray-50 overflow-y-scroll scrollbar-hide'>
    <Header/>
    <div className='flex flex-col items-center justify-center min-h-screen mt-4 py-14 text-center '>
      <div className=' font-xs italic'>
        <img src="https://links.papareact.com/ocw" alt=""  className='w-80'/>
        <p>This is not a real app built for education purpose</p>
      </div>
      <div className='items-center'>
      
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button className='p-3 mt-40  bg-blue-500 text-white rounded-lg' onClick={() => SignIntiProvider(provider.id, {callbackUrl:'/'})}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
    
      
    </div>
  )
}
export async function getServerSideProps(){
    const providers= await getProviders();

    return{
        props:{
            providers
        },
    }
}

export default signIn