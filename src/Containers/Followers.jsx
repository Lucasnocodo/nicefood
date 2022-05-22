import React, { memo, useState, Fragment } from 'react'
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import './followers.scss'
import ButtonX from '../Components/ButtonX';

const TabX = styled(Tab)(() => ({
    color: '#929292',
    textTransform: 'capitalize',
    fontFamily: 'Ubuntu',
    height: '65px',
    paddingTop: '18px',
    paddingBottom: 0,
}))

const tabStyleProps = { fontSize: 16, paddingTop: '20px' }

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            {...other}
        >
            {value === index && children}
        </div >
    );
}


function Followers({ results }) {
    const [tabIndex, setTabIndex] = useState(0);

    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const followedResults = results.filter((data) => data.isFollowing)

    const PanelList = [
        {
            tabNum: 0,
            resource: results,
            tabId: 'all_users'
        },
        {
            tabNum: 1,
            resource: followedResults,
            tabId: 'following_users'
        },
    ]
    return (
        <div className='followers-container'>
            <Tabs
                value={tabIndex}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                variant="fullWidth"
            >
                <TabX label="Followers" sx={tabStyleProps} />
                <TabX label="Following" sx={tabStyleProps} />
            </Tabs>
            {PanelList.map(({ tabNum, resource, tabId }) => (
                <Fragment key={tabId}>
                    <TabPanel className='panel' value={tabIndex} index={tabNum} >
                        {resource.map(({ avater, id, isFollowing, name, username }, index) => (
                            <Fragment key={id}>
                                <FollwerItem
                                    avater={avater}
                                    isFollowing={isFollowing}
                                    name={name}
                                    username={username}
                                    index={index}
                                    tabId={tabId} />
                            </Fragment>

                        ))}
                    </TabPanel>
                </Fragment>
            ))}

        </div>
    )
}

const FollwerItem = ({ avater, isFollowing, name, username, index, tabId }) => {

    const [isFakeFollowing, setFakeFollowing] = useState(isFollowing)

    const handleFollowClick = () => {
        // It should call a post api to change isFollowing state in database.
        // Here only for change button style. 
        setFakeFollowing(pre => !pre)
    }

    const handleImgError = ({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = `./images/avatar${index % 6 + 1}.png`;
    }

    const needHideItem = tabId === 'following_users' && !isFakeFollowing

    return <div className='follower-item' style={needHideItem ? { display: 'none' } : null}>
        <div className='item-box'>
            <img
                src={avater}
                width={40}
                height={40}
                alt=''
                onError={handleImgError} />
            <div className='name-box'>
                <p className='item-title'>{name}</p>
                <p className='item-username'>{username}</p>
            </div>
        </div>
        <ButtonX
            variant={isFakeFollowing ? 'contained' : 'outlined'}
            onClick={() => handleFollowClick()}
        >
            {isFakeFollowing ? 'Following' : 'Follow'}
        </ButtonX>
    </div >
}

export default memo(Followers)