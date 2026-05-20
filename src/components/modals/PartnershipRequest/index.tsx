'use client';

import { useForm } from 'react-hook-form';
import Modal from '@/components/modals/Modal';
import styles from './PartnershipRequest.module.scss';
import Link from "next/link";
import Button from "@/components/Button";
import clsx from "clsx";

type PartnershipRequestProps = {
    isOpen: boolean;
    onCloseAction: () => void;
};

type PartnershipRequestForm = {
    name: string;
    email: string;
    role: 'advertiser' | 'publisher';
    message: string;
    agree: boolean;
};

export default function PartnershipRequest({ isOpen, onCloseAction }: PartnershipRequestProps) {
    const { register, handleSubmit, formState: { errors }, } = useForm<PartnershipRequestForm>({
        defaultValues: {
            role: 'advertiser',
            message: '',
            agree: false,
        },
    });

    const onSubmit = (data: PartnershipRequestForm) => {
        console.log(data);
    };

    return (
        <Modal isOpen={isOpen} onCloseAction={onCloseAction}>
            <div className={styles.partnership_request}>
                <div className={styles.partnership_request__top}>
                    <h2 className={styles.partnership_request__title}>
                        Let’s Drive Results
                    </h2>

                    <button
                        type="button"
                        onClick={onCloseAction}
                        aria-label="Close modal"
                        className="modal__close-btn"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path
                                d="M14.781 13.7198C14.8507 13.7895 14.906 13.8722 14.9437 13.9632C14.9814 14.0543 15.0008 14.1519 15.0008 14.2504C15.0008 14.349 14.9814 14.4465 14.9437 14.5376C14.906 14.6286 14.8507 14.7114 14.781 14.781C14.7114 14.8507 14.6286 14.906 14.5376 14.9437C14.4465 14.9814 14.349 15.0008 14.2504 15.0008C14.1519 15.0008 14.0543 14.9814 13.9632 14.9437C13.8722 14.906 13.7895 14.8507 13.7198 14.781L7.50042 8.56073L1.28104 14.781C1.14031 14.9218 0.94944 15.0008 0.750417 15.0008C0.551394 15.0008 0.360523 14.9218 0.219792 14.781C0.0790615 14.6403 3.92322e-09 14.4494 0 14.2504C-3.92322e-09 14.0514 0.0790615 13.8605 0.219792 13.7198L6.4401 7.50042L0.219792 1.28104C0.0790615 1.14031 0 0.94944 0 0.750417C0 0.551394 0.0790615 0.360523 0.219792 0.219792C0.360523 0.0790615 0.551394 0 0.750417 0C0.94944 0 1.14031 0.0790615 1.28104 0.219792L7.50042 6.4401L13.7198 0.219792C13.8605 0.0790615 14.0514 -3.92322e-09 14.2504 0C14.4494 3.92322e-09 14.6403 0.0790615 14.781 0.219792C14.9218 0.360523 15.0008 0.551394 15.0008 0.750417C15.0008 0.94944 14.9218 1.14031 14.781 1.28104L8.56073 7.50042L14.781 13.7198Z"
                                fill="currentColor"/>
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className={`${styles.partnership_request__form} form`}>
                    <div>
                        <label htmlFor="partnership-name" className="form__label">
                            Name {' '}
                            {errors.name && (
                                <span className="form__error">
                                    (Please enter your name.)
                                </span>
                            )}
                        </label>
                        <input
                            id="partnership-name"
                            type="text"
                            placeholder="Enter your full name"
                            {...register('name', {required: true})}
                            className={clsx(
                                'form__input',
                                errors.name && 'form__input-error'
                            )}
                        />
                    </div>

                    <div>
                        <p className="form__label">Your role</p>

                        <div className="form__radio" role="radiogroup" aria-label="Your role">
                            <label className="form__radio_item">
                                <input
                                    type="radio"
                                    value="advertiser"
                                    {...register('role', {required: true})}
                                />
                                <span className="form__radio_custom"></span>
                                <p className="form__radio_title">Advertiser</p>
                            </label>

                            <label className="form__radio_item">
                                <input
                                    type="radio"
                                    value="publisher"
                                    {...register('role', {required: true})}
                                />
                                <span className="form__radio_custom"></span>
                                <p>Publisher</p>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="partnership-email" className="form__label">
                            Email Address
                            {' '}
                            {errors.name && (
                                <span className="form__error">
                                    (Please enter your email address.)
                                </span>
                            )}
                        </label>
                        <input
                            id="partnership-email"
                            type="email"
                            placeholder="Enter your email address"
                            {...register('email', {required: true})}
                            className={clsx(
                                'form__input',
                                errors.name && 'form__input-error'
                            )}
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="form__label">
                            Your Message
                        </label>

                        <textarea
                            id="message"
                            placeholder="Write your message"
                            {...register('message')}
                            className="form__textarea"
                        />

                    </div>

                    <div>
                        {errors.agree && (
                            <span className="form__error">
                                Please confirm your agreement before submitting the form.
                            </span>
                        )}
                        <label className="form__radio_item">
                            <input
                                type="checkbox"
                                {...register('agree', {required: true})}
                            />

                            <span
                                className={clsx('form__radio_custom', errors.agree && 'form__input-error')}>
                            </span>

                            <p className="form__agree_value">
                                I have read and agree to the
                                {' '}
                                <Link href={'/terms-and-conditions'}>
                                    Terms and Conditions
                                </Link>
                                {' '}and{' '}
                                <Link href={'/privacy-policy'}>
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </label>
                    </div>

                    <button type="submit" className="form__btn">
                        Apply Now
                    </button>
                </form>
            </div>
        </Modal>
    );
}
