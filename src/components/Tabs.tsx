import React, { useState } from 'react';

interface Tab {
    key: string;
    label: string;
}

interface TabProps {
    tabs: Tab[];
    children: React.ReactNode[];
}

const Tabs: React.FC<TabProps> = ({tabs,children}) => {
    const [activeTab, setActiveTab] = useState(tabs[0].key);

    return (
        <div className='w-full flex flex-col items-center font-roboto text-sm md:text-base z-10'>
            <div className="tabs flex flex-row w-full md:w-[60%]">
                {tabs.map(tab => (
                    <div
                    key={tab.key}
                    className={`tab-button ${activeTab === tab.key ? 'active' : 'inactive'} w-1/4 h-10 flex justify-center items-center hover:cursor-pointer`}
                    onClick={() => setActiveTab(tab.key)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className="tab-content w-full flex justify-center">
                {children.filter(child => React.isValidElement(child) && child.props.tabKey === activeTab)}
            </div>
        </div>
    );
}

export default Tabs;