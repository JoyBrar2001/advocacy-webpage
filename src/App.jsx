import React from 'react';
import PageWrapper from './components/PageWrapper';
import Card1 from './components/Card1';
import PopupLink from './components/PopupLink';
import Card2 from './components/Card2';

const App = () => {
  return (
    <>
      <PageWrapper className={"flex justify-center items-center gap-2"}>
        <div>
          <h1 className="text-[#3b3b3b] text-7xl font-semibold whitespace-nowrap">
            Advocate Updates
          </h1>
        </div>

        <div className='w-full h-full'>
          <img src="Gemini Star.png" alt="" className='w-full h-full' />
        </div>
      </PageWrapper>

      <PageWrapper>
        <div className='mx-auto py-4'>
          <h2 className='text-5xl text-[#3b3b3b] text-center'>
            Wave 2 & ESRI Expectations
          </h2>
        </div>

        <div className="grid md:grid-cols-3 px-4 gap-4">
          <Card1>
            <h2 className='text-lg font-bold underline'>
              Wave 2:
            </h2>

            <h2 className='text-lg font-bold'>
              Shipped
            </h2>

            <h2 className='text-lg font-bold mt-4'>
              TMO
            </h2>

            <p className='text-lg text-[#3b3b3b]'>
              Shipped to TSM<br />
              All shipments should have already arrive.
            </p>

            <h2 className='text-lg font-bold mt-4'>
              AT&T
            </h2>

            <p className='text-lg text-[#3b3b3b]'>
              Shipped Direct to Store<br />
              <i>
                (Select Devices will be TSM delivered)
              </i>
            </p>

            <h2 className='text-lg font-bold'>
              ATTN
            </h2>

            <p className='text-lg text-[#3b3b3b]'>
              Advocates Name
            </p>

            <h2 className='text-lg font-bold underline mt-4'>
              Wave 3:
            </h2>

            <h2 className='text-lg font-bold mt-4'>
              TMO
            </h2>

            <p className='text-lg text-[#3b3b3b]'>
              Expected to ship{" "}
              <span className='font-bold underline text-black'>
                Monday 9/16 direct to store
              </span>
            </p>
          </Card1>

          <Card1>
            <h2 className='text-lg font-bold underline'>
              Advocate ESRI Check Ins Start 9.9
            </h2>

            <p className='text-lg text-[#3b3b3b] mt-4 italic'>
              Every advocate that has a device needs an ESRI Check-In by EOD 9.20.
            </p>

            <p className='text-lg text-[#3b3b3b] mt-4 italic'>
              Check-Ins do <b>not</b> require store visits scheduled. Check ins can be phone calls directly to the advocate.
            </p>

          </Card1>

          <Card1>
            <h2 className='text-lg font-bold underline'>
              Advocate Reassignments VIA ESRI
            </h2>

            <p className='text-lg text-[#3b3b3b] mt-4'>
              All advocate reassignments start today, 9.9.<br />
              Follow steps in the{" "}
              <PopupLink url="https://docs.google.com/presentation/d/1_vIGuD36Xuq1KEY1lfRGCXvodO3CYwdPZcjVmb5zUM8/edit#slide=id.g28574b0534e_0_157">
                SOP: Advocacy Replacement{" "}
              </PopupLink>
              to submit assignments through ESRI.
            </p>

            <p className='text-lg text-[#3b3b3b] mt-4'>
              All known reassignments need to be submitted by EOD Wednesday, 9.11
            </p>

            <p className='text-lg text-[#3b3b3b] mt-4'>
              Ensure you follow each partners reassignments guidelines{" "}
              <PopupLink url="https://drive.google.com/file/d/1MdjMhMCgpVcZ3srS5uEnFImFfVzCEW9d/view?usp=sharing">
                HERE
              </PopupLink>
            </p>
          </Card1>
        </div>
      </PageWrapper>

      <PageWrapper>
        <div className="mx-auto py-4">
          <h2 className='text-center text-5xl text-[#666666]'>
            Advocate Reassignment Guidelines by Partner
          </h2>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4'>
          <Card2
            heading={"T-Mobile COR & DLR"}
            description={"TSM to connect with store manager to identify the new advocate. Once confirmed with store manager, submit through ESRI"}
          />

          <Card2
            heading={"AT&T COR & DLR"}
            description={"TSM to connect with store manager to identify the new advocate. Once confirmed with store manager, submit through ESRI."}
          />

          <Card2
            heading={"VZW - VICTRA ONLY"}
            description={"TSM to connect with store manager to identify the new advocate. Once confirmed with store manager, submit through ESRI."}
          />

          <Card2
            heading={"BEST BUY US"}
            description={"TSM to connect with store manager to identify the new advocate. Once confirmed with store manager, submit through ESRI."}
          />

          <Card2
            heading={"VERIZON COR & Rest of DLRs"}
            description={"Waiting on confirmation. Guideline to be determined. TSM to hold devices until further notice."}
          />

          <Card2
            heading={"VERIZON COR & Rest of DLRs"}
            description={"Waiting on confirmation. Guideline to be determined. TSM to hold devices until further notice."}
          >
            <p className='text-lg text-[#666666]'>
              <span className='underline'>
                Telus & Rogers{" "}
              </span>
              - TSM to connect with store manager to identify the new advocate. Once confirmed with store manager, submit through ESRI.
            </p>

            <p className='text-lg text-[#666666]'>
              <span className='underline'>
                Bell{" "}
              </span>
              - Connect with AM - Kyle to confirm recommended Ph.G for Bell's approval before handing the device off.
            </p>
          </Card2>
        </div>

        <div className='mx-auto mt-4'>
          <h2 className="text-center text-lg font-semibold text-[#3b3b3b]">
            *NOTE: All Necessary firms must be completed. Required forms can be found in{" "}
            <PopupLink url={"https://docs.google.com/presentation/d/1_vIGuD36Xuq1KEY1lfRGCXvodO3CYwdPZcjVmb5zUM8/edit#slide=id.g28574b0534e_0_275"}>
              Pixel 9 Advocacy Operating Procedure Deck.
            </PopupLink>
          </h2>
        </div>
      </PageWrapper>

      <PageWrapper className="py-0">
        <div className="mx-auto">
          <h1 className="text-[#3b3b3b] text-7xl text-center font-semibold">
            Pixel 9 Advocacy Operating Procedure
          </h1>
        </div>

        <div className="h-full w-full mt-28 relative">
          <img src="/Pixel Phone.png" alt="" className="w-[400px] mx-auto object-contain" />
        </div>
      </PageWrapper>

      <PageWrapper className={"flex flex-col justify-center items-center gap-12"}>
        <div className='mx-auto'>
          <h2 className='text-center text-5xl text-[#666666]'>
            Important Links
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 px-4 gap-4">
          <Card1 className="aspect-square flex justify-center items-center p-6">
            <PopupLink
              url="https://docs.google.com/spreadsheets/u/0/d/1GC5MoEdcw4ZF3uA8816xvt3RYK1VVo8t8aPsHf4B83o/edit"
              textClassNames="text-3xl font-bold"
            >
              FALL 2024 | Advocate Device Tracker
            </PopupLink>
          </Card1>

          <Card1 className="aspect-square flex justify-center items-center p-6">
            <PopupLink
              url="https://docs.google.com/spreadsheets/u/0/d/1R9nLhPBYStKymTBnmPZ7xdMsoZtecdaIqL56aJqFEpM/edit"
              textClassNames="text-3xl font-bold"
            >
              FALL 2024 | TSM Advocacy Device Tracker
            </PopupLink>
          </Card1>

          <Card1 className="aspect-square flex justify-center items-center p-6">
            <PopupLink
              url="https://docs.google.com/presentation/d/1O05hcBaktONcV7ApXkwah8BIhPkhCGEc-I3qwSqqkmI/edit#slide=id.g2ceb1870ce4_0_164"
              textClassNames="text-3xl font-bold"
            >
              Ph.G and Advocacy Device Returns & Replacements
            </PopupLink>
          </Card1>
        </div>
      </PageWrapper>

      <PageWrapper className={"flex flex-col justify-center items-center gap-12"}>
        <div className='mx-auto'>
          <h2 className='text-center text-5xl text-[#666666]'>
            Follow the Advocacy Device Return Shipping Process when...
          </h2>
        </div>

        <div className="grid md:grid-cols-2 max-w-[840px] px-4 gap-10">
          <Card1 className="aspect-square flex justify-center items-center p-6 relative">
            <div className="absolute flex justify-center items-center bg-white size-12 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 border-[3px] border-black/30 shadow-lg">
              <h2 className="text-2xl text-[#3b3b3b]">
                1
              </h2>
            </div>

            <p className="text-2xl text-[#3b3b3b]">
              Device is damaged and approved for replacement<br />
              <span className="font-bold text-black">
                (see slide 15)
              </span>
            </p>
          </Card1>

          <Card1 className="aspect-square flex justify-center items-center p-6 relative">
            <div className="absolute flex justify-center items-center bg-white size-12 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 border-[3px] border-black/30 shadow-lg">
              <h2 className="text-2xl text-[#3b3b3b]">
                2
              </h2>
            </div>

            <p className="text-2xl text-[#3b3b3b]">
              Device is damaged and approved for replacement<br />
              <span className="font-bold text-black">
                (see slide 15)
              </span>
            </p>
          </Card1>
        </div>

        <Card1 className={"w-full px-6 py-4"}>
          <p className='text-xl text-[#3b3b3b]'>
            See the device return guide{" "}
            <PopupLink url={"https://docs.google.com/presentation/d/1O05hcBaktONcV7ApXkwah8BIhPkhCGEc-I3qwSqqkmI/edit#slide=id.g2ceb1870ce4_0_164"}>
              HERE{" "}
            </PopupLink>
            for more information. The Advocate{" "}
            <span className="font-bold underline">
              OR{" "}
            </span>
            their Manager should complete the{" "}
            <PopupLink url={"https://wkf.ms/3Ko4FIO"}>
              Return Form{" "}
            </PopupLink>
            for one of the 2 scenarios below.
          </p>

          <p className='text-xl font-bold'>
            If neither the advocate, nor the manager can complete the form. You should talk to your ASM about completing the form yourself.
          </p>
        </Card1>
      </PageWrapper>

      <PageWrapper>
        Page 7
      </PageWrapper>

      <PageWrapper>
        Page 8
      </PageWrapper>

      <PageWrapper>
        <div className='mx-auto'>
          <h2 className='text-center text-5xl text-[#666666]'>
            Additional options to Terminate Advocacy Program when...
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 px-4 gap-4 mt-12 max-w-[960px] mx-auto">
          <Card1 className="aspect-square flex justify-center items-center p-6 relative">
            <h2 className='text-2xl text-[#3b3b3b]'>
              Advocate{" "}
              <span className="font-bold">
                lost the device.
              </span>
            </h2>

            <div className="absolute flex justify-center items-center bg-white size-12 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 border-[3px] border-black/30 shadow-lg">
              <h2 className="text-2xl text-[#3b3b3b]">
                1
              </h2>
            </div>
          </Card1>

          <Card1 className="aspect-square flex justify-center items-center p-6 relative">
            <h2 className='text-2xl text-[#3b3b3b]'>
              Advocate{" "}
              <span className="font-bold">
                sold the device{" "}
              </span>
              online or in-person.
            </h2>

            <div className="absolute flex justify-center items-center bg-white size-12 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 border-[3px] border-black/30 shadow-lg">
              <h2 className="text-2xl text-[#3b3b3b]">
                2
              </h2>
            </div>
          </Card1>

          <Card1 className="aspect-square flex justify-center items-center p-6 relative">
            <h2 className='text-2xl text-[#3b3b3b]'>
              Advocate{" "}
              <span className="font-bold">
                stole the device.
              </span>
            </h2>

            <div className="absolute flex justify-center items-center bg-white size-12 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 border-[3px] border-black/30 shadow-lg">
              <h2 className="text-2xl text-[#3b3b3b]">
                3
              </h2>
            </div>
          </Card1>
        </div>
      </PageWrapper>

      <PageWrapper>
        <div className='mx-auto'>
          <h2 className='text-center text-5xl text-[#666666]'>
            Choose an Advocate Represntative Replacement when...
          </h2>
        </div>

        <p className='text-lg text-[#666666] text-center font-bold italic max-w-[640px] mx-auto mt-6 '>
          Only start the survey when you, the TSM,{" "}
          <span className="underline">
            HAVE THE DEVICE{" "}
          </span>
          in your possession that needs to be reallocated.
        </p>

        <div className="grid md:grid-cols-2 px-4 gap-12 mt-12 max-w-[960px] mx-auto">
          <Card1 className="aspect-square flex justify-center items-center p-6 relative">
            <h2 className='text-2xl text-[#3b3b3b]'>
              You have a{" "}
              <span className="font-bold">
                higher performing approved advocate{" "}
              </span>
              that is ready to receive a device in the{" "}
              <span className="font-bold">
                SAME{" "}
              </span>
              store.
            </h2>

            <div className="absolute flex justify-center items-center bg-white size-12 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 border-[3px] border-black/30 shadow-lg">
              <h2 className="text-2xl text-[#3b3b3b]">
                1
              </h2>
            </div>
          </Card1>

          <Card1 className="aspect-square flex justify-center items-center p-6 relative">
            <h2 className='text-2xl text-[#3b3b3b]'>
              Current advocate is{" "}
              <span className="font-bold">
                leaving the store{" "}
              </span>
              and you have another{" "}
              <span className="font-bold">
                viable candidate{" "}
              </span>
              in the{" "}
              <span className="font-bold">
                SAME{" "}
              </span>
              store.
            </h2>

            <div className="absolute flex justify-center items-center bg-white size-12 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 border-[3px] border-black/30 shadow-lg">
              <h2 className="text-2xl text-[#3b3b3b]">
                2
              </h2>
            </div>
          </Card1>
        </div>
      </PageWrapper>

      <PageWrapper>
        <div className='mx-auto'>
          <h2 className='text-center text-5xl text-[#666666]'>
            Choose an Relocate Advocate when...
          </h2>
        </div>

        <p className='text-lg text-[#666666] text-center font-bold italic max-w-[640px] mx-auto mt-6 '>
          Only start the survey when you, the TSM, have the device that needs to be reallocated.
        </p>

        <div className="grid md:grid-cols-2 px-4 gap-12 mt-12 max-w-[960px] mx-auto">
          <Card1 className="aspect-square flex justify-center items-center p-6 relative">
            <h2 className='text-2xl text-[#3b3b3b]'>
              Current advocate needs to be replaced, but the{" "}
              <span className="font-bold">
                only viable backup is in another location.{" "}
              </span>
            </h2>

            <div className="absolute flex justify-center items-center bg-white size-12 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 border-[3px] border-black/30 shadow-lg">
              <h2 className="text-2xl text-[#3b3b3b]">
                1
              </h2>
            </div>
          </Card1>

          <Card1 className="aspect-square flex justify-center items-center p-6 relative">
            <h2 className='text-2xl text-[#3b3b3b]'>
              You, the TSM, believes there is a{" "}
              <span className="font-bold">
                better replacement{" "}
              </span>
              advocate int{" "}
              <span className="font-bold">
                another location{" "}
              </span>
            </h2>

            <div className="absolute flex justify-center items-center bg-white size-12 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 border-[3px] border-black/30 shadow-lg">
              <h2 className="text-2xl text-[#3b3b3b]">
                2
              </h2>
            </div>
          </Card1>
        </div>
      </PageWrapper>

      <PageWrapper>
        Page 12
      </PageWrapper>

      <PageWrapper>
        Page 13
      </PageWrapper>

      <PageWrapper className={"flex flex-col justify-center items-center gap-12"}>
        <div className='mx-auto'>
          <h2 className='text-center text-5xl text-[#666666]'>
            ESRI Admin Cadence
          </h2>
        </div>

        <div className="grid md:grid-cols-2 px-4 gap-10">
          <Card1 className="flex flex-col gap-6 justify-center items-center p-20 relative">
            <p className="text-2xl text-[#3b3b3b]">
              <span className="font-bold text-black">
                Request Submission Date:<br />
              </span>
              Monday - Wednesday<br />
            </p>
            
            <p className="text-2xl text-[#3b3b3b]">
              <span className="font-bold text-black">
                Actioned By Date:<br />
              </span>
              Same week by EOD Friday<br />
            </p>
          </Card1>

          <Card1 className="flex flex-col gap-6 justify-center items-center p-10 relative">
            <p className="text-2xl text-[#3b3b3b]">
              <span className="font-bold text-black">
                Request Submission Date:<br />
              </span>
              Thurday - Friday<br />
            </p>
            
            <p className="text-2xl text-[#3b3b3b]">
              <span className="font-bold text-black">
                Actioned By Date:<br />
              </span>
              Same week by EOD Friday<br />
            </p>
          </Card1>
        </div>

        <Card1 className={"w-full px-10 py-8"}>
          <p className='text-2xl'>
            The backend of the survery will be updated{" "}
            <span className='font-bold'>
              EOD Friday{" "}
            </span>
            so that first thing Moneday, the backend advocate data will be up to date.
          </p>
        </Card1>
      </PageWrapper>
    </>
  );
}

export default App;