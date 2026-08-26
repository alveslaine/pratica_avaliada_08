import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {
    return (
        <div className="flex justify-center w-full px-2 text-white bg-slate-800 py-4 mt-auto">
            <div className="container flex flex-col items-center gap-2">
                <p className='text-base font-bold text-center md:text-xl'>Loja de Games Generation | Copyright: 2026</p>
                <p className='text-sm text-center md:text-lg'>Acesse nossas redes sociais</p>
                <div className='flex flex-wrap justify-center gap-2'>
                    <a href="#" target="_blank" className="flex items-center" rel="noopener noreferrer">
                        <span className="flex items-center justify-center w-10 h-10">
                            <LinkedinLogoIcon size={28} weight='bold' />
                        </span>
                    </a>
                    <a href="#" target="_blank" className="flex items-center" rel="noopener noreferrer">
                        <span className="flex items-center justify-center w-10 h-10">
                            <InstagramLogoIcon size={28} weight='bold' />
                        </span>
                    </a>
                    <a href="#" target="_blank" className="flex items-center" rel="noopener noreferrer">
                        <span className="flex items-center justify-center w-10 h-10">
                            <FacebookLogoIcon size={28} weight='bold' />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
