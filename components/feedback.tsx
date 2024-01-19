'use client'

import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, Textarea, useDisclosure } from '@nextui-org/react'
import React, { FormEvent, RefObject, useRef, useState } from 'react'
import { FaMailBulk } from 'react-icons/fa';
import { FaAmilia, FaComment, FaEnvelope, FaHeading, FaMailchimp, FaPerson, FaUser } from 'react-icons/fa6'
import ReCAPTCHA from 'react-google-recaptcha';


export default function Feedback() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = React.useState<"opaque" | "transparent" | "blur" | undefined>('opaque')

    const [captchaToken, setCaptchaToken] = React.useState("");
    const [sending, setSending] = React.useState(false);


    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const recaptcha: RefObject<ReCAPTCHA> = useRef(null);

    const handleOpen = (backdrop: "opaque" | "transparent" | "blur" | undefined) => {
        setBackdrop(backdrop)
        onOpen();
    }

    async function submitForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Getting the values from their useRef hooks
        let name, title, email, message;
        name = nameRef.current!.value;
        title = titleRef.current!.value;
        email = emailRef.current!.value;
        message = messageRef.current!.value;
        //Some form Validation
        if (!name || !title || !email || !message) {
            alert("Failed: Ensure to fill all form inputs");
            return;
        }

        setSending(true);
        // Clear the form inputs after submit
        nameRef.current!.value = "";
        titleRef.current!.value = "";
        emailRef.current!.value = "";
        messageRef.current!.value = "";
        setCaptchaToken("");

        // TODO: Send the form  values to an api route

        const formValues = { name, title, email, message, captchaToken };
        let result;
        let data = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        setSending(false);

        result = await data.json();


        onClose();
        console.log(result)
    }

    const onCaptchaChange = (token: string | null) => {
        // Set the captcha token when the user completes the reCAPTCHA
        if (token) {
            setCaptchaToken(token);
        }
    };

    return (
        <>
            <Button
                key="blur"
                isIconOnly
                color="primary"
                onClick={() => handleOpen("blur")}
                endContent={<FaComment size={18} />}
            >
            </Button>
            <div className=''>
                <Modal
                    backdrop={backdrop}
                    isOpen={isOpen}
                    placement='center'
                    onClose={onClose}
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalBody>
                                    {/* Author: FormBold Team */}
                                    {/* Learn More: https://formbold.com */}
                                    <form
                                        action="/"
                                        onSubmit={submitForm}
                                    >
                                        <div className="flex flex-col justify-center items-center gap-y-4">
                                            <p
                                                className="mb-3 block text-base font-medium"
                                            >
                                                Geri Bildirim
                                            </p>
                                            <Input
                                                isRequired
                                                isClearable
                                                variant="bordered"
                                                type="text"
                                                label="İsim"
                                                placeholder="İsim"
                                                labelPlacement="outside"
                                                ref={nameRef}
                                                onClear={() => console.log("input cleared")}
                                                startContent={
                                                    <FaUser className="text-default-400 pointer-events-none flex-shrink-0" />
                                                }
                                                className="max-w-xs my-2"
                                            />

                                            <Input
                                                isRequired
                                                isClearable
                                                variant="bordered"
                                                type="email"
                                                label="Email"
                                                placeholder="name@email.com"
                                                labelPlacement="outside"
                                                ref={emailRef}
                                                onClear={() => console.log("input cleared")}
                                                startContent={
                                                    <FaEnvelope className="text-default-400 pointer-events-none flex-shrink-0" />
                                                }
                                                className="max-w-xs"
                                            />

                                            <Input
                                                isRequired
                                                isClearable
                                                variant="bordered"
                                                type="text"
                                                label={`Başlık`}
                                                placeholder={`Başlık`}
                                                labelPlacement="outside"
                                                ref={titleRef}
                                                onClear={() => console.log("input cleared")}
                                                startContent={
                                                    <FaHeading className="text-default-400 pointer-events-none flex-shrink-0" />
                                                }
                                                className="max-w-xs"
                                            />
                                            <Select
                                                labelPlacement={"outside"}
                                                label="Geri Bildirim Tipi"
                                                placeholder="Seç"
                                                className="max-w-xs"
                                            >
                                                <SelectItem key={"marka"} value={"marka"}>
                                                    {"Marka Öner"}
                                                </SelectItem>
                                                <SelectItem key={"tavsiye"} value={"tavsiye"}>
                                                    {"Tavsiye Ver"}
                                                </SelectItem>
                                            </Select>

                                            <Textarea
                                                isRequired
                                                variant="bordered"
                                                type="text"
                                                label="Mesaj"
                                                placeholder="Açıklama"
                                                labelPlacement="outside"
                                                ref={messageRef}
                                                className="max-w-xs"
                                            />

                                            <ReCAPTCHA
                                                sitekey="6LeAeVUpAAAAAF_XZiJxUs-9dIOIv79RFgx1iVmj"
                                                onChange={onCaptchaChange}
                                                ref={recaptcha}
                                                className="max-w-xs"
                                            />

                                            <Button
                                                isLoading={sending}
                                                isDisabled={captchaToken == ""}
                                                color="secondary"
                                                variant='solid'
                                                radius='none'
                                                className='bg-[#6A64F1] w-full rounded-md font-semibold max-w-xs'
                                                type='submit'
                                                spinner={
                                                    <svg
                                                        className="animate-spin h-5 w-5 text-current"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        />
                                                        <path
                                                            className="opacity-75"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                }
                                            >
                                                Gönder
                                            </Button>
                                        </div>
                                        <div className=''>

                                        </div>
                                    </form>

                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>

        </>
    )
}
