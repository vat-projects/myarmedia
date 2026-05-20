'use client';

import { useForm, Controller } from 'react-hook-form';
import { PhoneInput } from 'react-international-phone';
import styles from './JoinMyarJoining.module.scss';
import Link from "next/link";
import clsx from "clsx";

type PartnershipRequestForm = {
    name: string;
    email: string;
    phone: string;
    role: 'manager' | 'specialist' | 'coordinator' | 'associate';
    message: string;
    agree: boolean;
    cv: FileList | null;
};

const CV_ACCEPT = '.pdf,.doc,.docx';

const CV_MIME_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const isValidCvFile = (file: File) => {
    const hasValidExtension = /\.(pdf|doc|docx)$/i.test(file.name);

    return CV_MIME_TYPES.includes(file.type) || hasValidExtension;
};

const validateCvFiles = (files: FileList | null) => {
    if (!files?.length) {
        return true;
    }

    return isValidCvFile(files[0]) || 'Please upload a PDF or DOC file.';
};

export default function JoinMyarJoining() {
    const { register, handleSubmit, control, setError, clearErrors, formState: { errors } } = useForm<PartnershipRequestForm>({
        defaultValues: {
            role: 'manager',
            phone: '',
            message: '',
            agree: false,
            cv: null,
        },
    });

    const onSubmit = (data: PartnershipRequestForm) => {
        console.log(data);
    };

    return (
        <section id="join-myar-joining" className={styles.join_myar_joining}>
            <div className="container">
                <div className={styles.join_myar_joining__inner}>
                    <div className={styles.join_myar_joining__top}>
                        <h2 className={styles.join_myar_joining__title}>
                            Interested in joining Myar?
                        </h2>

                        <p className="text-style text-style--black-75 text-style--mobile">
                            Submit your application, and our team will review your experience, background, and potential fit for
                            current or future opportunities within our performance-focused environment.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className={`${styles.join_myar_joining__form} form`}>
                        <div>
                            <label htmlFor="partnership-name" className="form__label">
                                Full Name {' '}
                                {errors.name && (
                                    <span className="form__error">
                                        (Please enter your full name.)
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
                            <label htmlFor="partnership-phone" className="form__label">
                                Phone Number
                                {' '}
                                {errors.phone && (
                                    <span className="form__error">
                                        (Please enter your phone number.)
                                    </span>
                                )}
                            </label>

                            <Controller
                                name="phone"
                                control={control}
                                rules={{ required: true }}
                                render={({field}) => (
                                    <div
                                        className={clsx(
                                            'form__input form__input-tel',
                                            errors.phone && 'form__input-error'
                                        )}
                                    >
                                        <PhoneInput
                                            defaultCountry="us"
                                            value={field.value}
                                            onChange={(phone) => field.onChange(phone)}
                                            inputProps={{
                                                id         : 'partnership-phone',
                                                name       : field.name,
                                                placeholder: 'Enter your phone number',
                                            }}
                                        />
                                    </div>
                                )}
                            />
                        </div>

                        <div>
                            <p className="form__label">Position of Interest</p>

                            <div className="form__radio" role="radiogroup" aria-label="Your role">
                                <label className="form__radio_item">
                                    <input
                                        type="radio"
                                        value="manager"
                                        {...register('role', {required: true})}
                                    />
                                    <span className="form__radio_custom"></span>
                                    <p className="form__radio_title">Affiliate Partnership Manager</p>
                                </label>

                                <label className="form__radio_item">
                                    <input
                                        type="radio"
                                        value="specialist"
                                        {...register('role', {required: true})}
                                    />
                                    <span className="form__radio_custom"></span>
                                    <p>Campaign Operations Specialist</p>
                                </label>

                                <label className="form__radio_item">
                                    <input
                                        type="radio"
                                        value="coordinator"
                                        {...register('role', {required: true})}
                                    />
                                    <span className="form__radio_custom"></span>
                                    <p>Performance Analytics Coordinator</p>
                                </label>

                                <label className="form__radio_item">
                                    <input
                                        type="radio"
                                        value="associate"
                                        {...register('role', {required: true})}
                                    />
                                    <span className="form__radio_custom"></span>
                                    <p>Business Development Associate</p>
                                </label>
                            </div>
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

                        <Controller
                            name="cv"
                            control={control}
                            rules={{ validate: validateCvFiles }}
                            render={({field}) => (
                                <div className="form__upload_wrapper">
                                    <p className="form__label">
                                        Upload Your CV / Resume

                                        {errors.cv && (
                                            <p className="form__error">
                                                ({errors.cv.message})
                                            </p>
                                        )}
                                    </p>

                                    <div
                                        className="form__upload"
                                        onDragOver={(e) => {
                                            e.preventDefault();
                                        }}
                                        onDrop={(e) => {
                                            e.preventDefault();

                                            const file = e.dataTransfer.files?.[0];

                                            if (!file) {
                                                return;
                                            }

                                            if (isValidCvFile(file)) {
                                                const dataTransfer = new DataTransfer();
                                                dataTransfer.items.add(file);
                                                field.onChange(dataTransfer.files);
                                                clearErrors('cv');
                                                return;
                                            }

                                            field.onChange(null);
                                            setError('cv', {
                                                type: 'validate',
                                                message: 'Please upload a PDF or DOC file.',
                                            });
                                        }}
                                    >
                                        <input
                                            id="cv-upload"
                                            type="file"
                                            accept={CV_ACCEPT}
                                            hidden
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];

                                                if (!file) {
                                                    field.onChange(null);
                                                    clearErrors('cv');
                                                    return;
                                                }

                                                if (isValidCvFile(file)) {
                                                    field.onChange(e.target.files);
                                                    clearErrors('cv');
                                                    return;
                                                }

                                                e.target.value = '';
                                                field.onChange(null);
                                                setError('cv', {
                                                    type: 'validate',
                                                    message: 'Please upload a PDF or DOC file.',
                                                });
                                            }}
                                        />

                                        <label
                                            htmlFor="cv-upload"
                                            className="form__upload-btn"
                                        >
                                            Upload File
                                        </label>

                                        <p className="form__upload-text">
                                            or drag and drop here
                                        </p>
                                    </div>

                                    {field.value?.[0] && (
                                        <p className="form__upload-text">
                                            {field.value[0].name}
                                        </p>
                                    )}
                                </div>
                            )}
                        />

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
            </div>
        </section>
    );
}
