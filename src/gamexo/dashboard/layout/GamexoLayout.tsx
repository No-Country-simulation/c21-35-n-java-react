// Supports weights 200-900
import '@fontsource-variable/nunito';
import { Sidebar, TopMenu } from '../components';

export const GamexoLayout = ({ children }: any) => {
    return (
        <div className='flex bg-[#000000] min-h-screen'>
            <Sidebar />
            <div className='flex flex-col w-full'>
                <TopMenu />
                {children}
            </div>
        </div>
    )
}
