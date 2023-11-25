import { quintessential } from "@/app/fonts"

export const Subheading = ({children}:{children: React.ReactNode}) => {
return <h2 className={`${quintessential.className} text-4xl`}>{children}
    </h2>
}