import { Mail } from "lucide-react"
import { TypographyH2 } from "./Typography/TypographyH2"
import { Button } from "./ui/button"
import React from "react"

export const NewsLetterSection = () => {

  return (
    <section className="bg-black rounded-2xl 
      mobile:mx-4 mobile:my-8 mobile:px-6 mobile:py-8 
      xs:px-8 sm:px-10 md:px-12 lg:px-16 
      xl:mx-16 2xl:mx-[100px] 2xl:my-[50px] 2xl:px-[64px] 2xl:py-[36px]">
      
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between 
        2xl:flex-row 2xl:gap-[212px]">
        
        
        <TypographyH2 
          className="text-white font-bold 
            mobile:text-[1.5rem] xs:text-[1.75rem] sm:text-[2rem] 
            lg:text-[2.25rem] xl:text-[2.5rem] 
            md:w-1/2 2xl:w-[60%]" 
          text="STAY UPTO DATE ABOUT OUR LATEST OFFERS" 
        />

        
        <form  onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}  className="flex flex-col gap-3 md:w-1/2 2xl:w-[40%]">
          <label 
            className="sr-only" 
            htmlFor="email">
            Subscribe to our newsletter
          </label>
                <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />      
                <input
                    className="w-full rounded-full py-3 pl-12 pr-4 text-sm 
                    bg-white placeholder-gray-500"
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                />
                      
          </div>

          <Button
            type="submit"
            variant="default"
            className="bg-white text-black rounded-full py-3 px-6 text-sm font-medium hover:bg-gray-200 transition">
            Subscribe to Newsletter
          </Button>
        </form>
      </div>
    </section>
  )
}
