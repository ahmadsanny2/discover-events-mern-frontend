import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Button, Card, CardBody, Input } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import useRegister from "./useRegister";

const Register = () => {
    const { visiblePassword, handleVisiblePassword } = useRegister()

    return (
        <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-10 lg:gap-20">
            <div className="flex flex-col w-full lg:w-1/3 items-center justify-center gap-10">
                <Image
                    src="/images/general/logo.svg"
                    alt="Logo"
                    width={180}
                    height={180}
                />
                <Image
                    src="/images/illustrations/login.svg"
                    alt="Login"
                    className="w-2/3 lg:w-full"
                    width={1024}
                    height={1024}
                />
            </div>
            <Card>
                <CardBody className="p-8">
                    <h2 className="text-xl font-bold text-danger-500">Create Account</h2>

                    <p className="text-small mb-4">
                        Have an account?&nbsp;
                        <Link href="/login" className="font-semibold text-danger-400">Login here</Link>
                    </p>

                    <form className="flex flex-col w-80 gap-4">
                        <Input
                            type="text"
                            label="Fullname"
                            variant="bordered"
                            autoComplete="off"
                        />
                        <Input
                            type="text"
                            label="Username"
                            variant="bordered"
                            autoComplete="off"
                        />
                        <Input
                            type="email"
                            label="Email"
                            variant="bordered"
                            autoComplete="off"
                        />
                        <Input
                            type={visiblePassword.password ? "text" : "password"}
                            label="Password"
                            variant="bordered"
                            autoComplete="off"
                            endContent={
                                <button
                                    className="focus:outline-none"
                                    type="button"
                                    onClick={() => handleVisiblePassword("password")}
                                >
                                    {visiblePassword.password ? <FaEye className="text-xl text-default-400 pointer-events-none" /> : <FaEyeSlash className="text-xl text-default-400 pointer-events-none" />}
                                </button>
                            }
                        />
                        <Input
                            type={visiblePassword.passwordConfirmation ? "text" : "password"}
                            label="Password Confirmation"
                            variant="bordered"
                            autoComplete="off"
                            endContent={
                                <button
                                    className="focus:outline-none"
                                    type="button"
                                    onClick={() => handleVisiblePassword("passwordConfirmation")}
                                >
                                    {visiblePassword.passwordConfirmation ? <FaEye className="text-xl text-default-400 pointer-events-none" /> : <FaEyeSlash className="text-xl text-default-400 pointer-events-none" />}
                                </button>
                            }
                        />
                        <Button color="danger" size="lg" type="submit">
                            Register
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}

export default Register;