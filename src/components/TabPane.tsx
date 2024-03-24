import React from 'react';

interface TabPaneProps {
    tabKey: string;
    children: React.ReactNode;
}

const TabPane: React.FC<TabPaneProps> = ({children}) => {
    return (
        <div className='w-full md:w-[60%] flex justify-center items-center'>
            {children}
        </div>

    )
}

export default TabPane;