'use client';

import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

type ModalProps = {
    isOpen: boolean;
    onCloseAction: () => void;
    children: ReactNode;
};

export default function Modal({ isOpen, onCloseAction, children }: ModalProps) {
    const [isMounted, setIsMounted] = useState(false);

    const handleEscape = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onCloseAction();
            }
        },
        [onCloseAction]
    );

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, handleEscape]);

    if (!isOpen || !isMounted) {
        return null;
    }

    return createPortal(
        <div className={styles.modal} role="dialog" aria-modal="true" onClick={onCloseAction}>
            <div onClick={(event) => event.stopPropagation()} className={styles.modal__inner}>
                {children}
            </div>
        </div>,
        document.body
    );
}
