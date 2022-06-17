import React from 'react'

import { SidemenuContainer } from './Management.style';
import SearchBar from './SearchBar';
import { ReactComponent as AddIcon } from '../../assets/imgs/icons/add-icon.svg';
import { ReactComponent as ManageIcon } from '../../assets/imgs/icons/manage-icon.svg';
import { ReactComponent as NotiIcon } from '../../assets/imgs/icons/noti-icon.svg';
import { ReactComponent as ExitIcon } from '../../assets/imgs/icons/exit-icon.svg';

export default function Sidemenu(props) {
    const url = "";
    const method = "POST"

    return (
        <SidemenuContainer isMobile={props.isMobile}>
            <SearchBar
                action={url}
                method={method}
                isMobile={props.isMobile}
                fill={props.isMobile ? "white" : "black"}
            />
            <ul>
                <a onClick={props.openModal} role="button">
                    <li>
                        <AddIcon fill={props.fill} /> Add
                    </li>
                </a>
                <a>
                    <li>
                        <ManageIcon fill={props.fill} /> Management
                    </li>
                </a>
                <a>
                    <li>
                        <NotiIcon fill={props.fill} /> Pending
                    </li>
                </a>
                <a>
                    <li>
                        <ExitIcon fill={props.fill} /> Log out
                    </li>
                </a>
            </ul>
        </SidemenuContainer>
    );
}