"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

    const path=usePathname();
    useEffect(()=>{
        console.log(path)
    },[])

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <Image src={'/logo1.png'} width={100} height={100} alt='logo' />
        <ul className='hidden md:flex gap-6'>
          <Link href={"/dashboard"}>
            <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path=='/dashboard'&&'text-primary font-bold'}
            `}
            
            >Dashboard</li>
            </Link>
            
            <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path=='/dashboard/questions'&&'text-primary font-bold'}
            `}>Questions</li>
              <Link href={"/dashboard/upgrade"}>
            <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path=='/dashboard/upgrade'&&'text-primary font-bold'}
            `}>Upgrade</li>
            </Link>
            <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path=='/dashboard/how'&&'text-primary font-bold'}
            `}>How it Works?</li>

        </ul>
        <UserButton/>
    </div>
  )
}

export default Header



// function Header() {
//   const path = usePathname();

//   useEffect(() => {
//       console.log(path);
//   }, [path]);

//   return (
//       <div className='flex p-2 items-center justify-between bg-secondary shadow-sm'>
//           {/* Spacer to replace the image */}
//           <div style={{ width: '100px', height: '100px' }}></div>
          
//           <ul className='hidden md:flex gap-6'>
//               <Link href={"/dashboard"}>
//                   <li className={`hover:text-primary hover:font-bold transition-all
//                   cursor-pointer
//                   ${path == '/dashboard' && 'text-primary font-bold'}
//                   `}>
//                       Dashboard
//                   </li>
//               </Link>
//               <li className={`hover:text-primary hover:font-bold transition-all
//               cursor-pointer
//               ${path == '/dashboard/questions' && 'text-primary font-bold'}
//               `}>
//                   Questions
//               </li>
//               <Link href={"/dashboard/upgrade"}>
//                   <li className={`hover:text-primary hover:font-bold transition-all
//                   cursor-pointer
//                   ${path == '/dashboard/upgrade' && 'text-primary font-bold'}
//                   `}>
//                       Upgrade
//                   </li>
//               </Link>
//               <li className={`hover:text-primary hover:font-bold transition-all
//               cursor-pointer
//               ${path == '/dashboard/how' && 'text-primary font-bold'}
//               `}>
//                   How it Works?
//               </li>
//           </ul>
//           <UserButton />
//       </div>
//   );
// }

// export default Header;
