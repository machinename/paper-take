'use client'

import React, { useRef } from 'react';
import { IconButton } from '@mui/material';
import styles from "../page.module.css";
import { Close } from '@mui/icons-material';
import { useAppContext } from '../providers/AppProvider';

const Information: React.FC =()=> {
    const { info, setInfo } = useAppContext();

    const informationRef = useRef<HTMLDivElement | null>(null);

    return (
        info && (
            <div className={styles.information} ref={informationRef}>
                <p>{info}</p>
                <IconButton onClick={() => setInfo('')}
                    sx={{
                        color: 'white',
                        '@media (prefers-color-scheme: dark)': {
                            color: 'black'
                        }
                    }}>
                    <Close />
                </IconButton>
            </div>
        ));
}

export default Information;