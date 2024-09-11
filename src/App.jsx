import React from 'react';
import PageWrapper from './components/PageWrapper';
import Card1 from './components/Card1';
import PopupLink from './components/PopupLink';
import Card2 from './components/Card2';

const App = () => {
  return (
    <>
      <PageWrapper className={"flex justify-center items-center"}>
        <div>
          <h1 className="text-[#3b3b3b] text-7xl font-semibold">
            Advocate Updates
          </h1>
        </div>

        <div>
          {/* image here */}
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
    </>
  );
}

export default App;