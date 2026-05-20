'use client';

import styles from './GetInTouchRequest.module.scss';
import Image from "next/image";
import Button from "@/components/Button";
import PartnershipRequest from "@/components/modals/PartnershipRequest";
import { useState } from "react";


export default function GetInTouchRequest() {
    const [isPartnershipModalOpen, setIsPartnershipModalOpen] = useState(false);


    return (
        <section className="section-bottom-space-100">
            <div className="container">
                <div className={styles.get_in_touch_request__inner}>
                    <div className={styles.get_in_touch_request__top}>
                        <div className={styles.get_in_touch_request__image}>
                            <Image
                                src={'/icons/paper-plane-tilt.svg'}
                                alt="Image"
                                width={40}
                                height={40}
                                loading="lazy"
                            />
                        </div>

                        <h2 className={styles.get_in_touch_request__title}>
                            Send Us a Request
                        </h2>
                    </div>
                    <div className={`${styles.get_in_touch_request__description} text-style text-style--black-75`}>
                        <p>
                            Tell us about your campaign goals, partnership interests, or traffic opportunities — our
                            team will review your request and get back to you shortly.
                        </p>
                    </div>
                    <div className={`${styles.get_in_touch_request__btn_wrapper} text-right`}>
                        <Button
                            type={'btn'}
                            style={'secondary'}
                            icon
                            className={styles.get_in_touch_request__btn}
                            onClick={() => setIsPartnershipModalOpen(true)}
                        >
                            Apply Now
                        </Button>
                    </div>
                    <div className={styles.get_in_touch_request__icon}>
                        <Image
                            src={'/get-in-touch/request.svg'}
                            alt="Image"
                            width={166}
                            height={146}
                            loading="lazy"
                        />
                    </div>
                    <PartnershipRequest
                        isOpen={isPartnershipModalOpen}
                        onCloseAction={() => setIsPartnershipModalOpen(false)}
                    />
                </div>
            </div>
        </section>
    )
}