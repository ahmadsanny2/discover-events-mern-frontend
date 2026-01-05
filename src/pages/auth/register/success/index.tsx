import AuthLayout from "@/components/layouts/AuthLayout"
import Register from "@/components/views/Register"
import RegisterSuccess from "@/components/views/RegisterSuccess"

const RegisterSuccessPage = () => {
    return (
        <AuthLayout title="Events | Register Success">
            <RegisterSuccess />
        </AuthLayout>
    )
}

export default RegisterSuccessPage