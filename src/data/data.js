import { BsCreditCard2Back } from 'react-icons/bs'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { IoIosReturnLeft } from 'react-icons/io'
import { BiSupport } from 'react-icons/bi'


export const data = [
    {
        id: 1,
        name: "Payment and invoice",
        icon: <BsCreditCard2Back />,
        faq: [
            {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                answer: "Nam sed dapibus tortor, id efficitur neque. Sed tortor arcu, lacinia eget magna ut, rutrum viverra ante. Donec pulvinar, magna et varius pulvinar, ligula purus hendrerit risus, vel finibus nisi quam a velit. In id orci dignissim, rhoncus diam eu, mattis massa."
            },
            {
                question: "In felis magna, interdum sed purus sit amet, mollis accumsan ex.",
                answer: "Sed semper elit ligula, feugiat tincidunt ipsum interdum in. Ut finibus ipsum lectus, eu pretium mauris congue eget."
            },
            {
                question: "Mauris pulvinar pretium sem eget ornare.",
                answer: "Vivamus vitae lacus ac diam pharetra luctus. Nulla mauris libero, dapibus et tincidunt dapibus, tempus at felis. Curabitur laoreet libero ultricies nisi finibus viverra."
            },
        ]
    },
    {
        id: 2,
        name: "Deliveries",
        icon: <MdOutlineDeliveryDining />,
        faq: [
            {
                question: "Aliquam scelerisque eros quis",
                answer: "Proin consectetur leo nisl. Sed gravida nunc quis ante suscipit, sed lacinia augue commodo. Nunc id tortor erat. Cras sed maximus orci."
            },
            {
                question: "Praesent libero magna, blandit vitae dapibus in",
                answer: "Ut suscipit, augue nec elementum tincidunt, turpis leo ullamcorper justo, in tincidunt mauris felis ac eros. Aliquam nec aliquet massa. Donec ornare sodales erat at pellentesque."
            },
            {
                question: "Pretium sem eget ornare.",
                answer: "Maecenas rhoncus urna et magna ornare, et pellentesque mauris condimentum. Aenean nec augue dapibus, volutpat erat eu, fringilla lacus."
            },
        ]
    },
    {
        id: 3,
        name: "Return & Crediting",
        icon: <IoIosReturnLeft />,
        faq: [
            {
                question: "Integer nulla risus, tempus ac mi vel",
                answer: "Curabitur condimentum, ipsum vitae dignissim dignissim, metus nulla convallis enim, auctor porta nulla libero a velit."
            },
            {
                question: "Pornare viverra neque. Morbi cursus sapien vitae velit tristique blandit.",
                answer: "Etiam vel ullamcorper lorem, a mattis turpis. Donec ut enim quis tellus euismod tristique eget eu felis."
            },
            {
                question: "Maecenas mattis purus et quam consequat volutpat",
                answer: "Cras libero risus, mattis vitae volutpat sit amet, congue eleifend lectus."
            },
        ]
    },
    {
        id: 4,
        name: "Complaint",
        icon: <BiSupport />,
        faq: [
            {
                question: "Aenean rhoncus orci nis",
                answer: "Curabitur tempor dapibus leo ut maximus. Sed dolor lectus, mattis at elit sed, euismod auctor nibh."
            },
            {
                question: "Set venenatis diam malesuada a",
                answer: "ed mattis massa quis orci tempus euismod. Vestibulum dapibus, ante in vulputate eleifend, leo justo semper justo."
            },
            {
                question: "Nam nisi justo, pulvinar sit",
                answer: "In imperdiet eget est non luctus. Quisque auctor mi ornare nunc sagittis, vitae sagittis diam dignissim."
            },
        ]
    },
]