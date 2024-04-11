import { JR_COLLEGE_BATCH_INFO, NEET_BATCH_INFO } from '@/data/batchInfoData'
import { SelectedWeProvideMenuType } from '@/types/dataTypes'
import { motion } from 'framer-motion'
import JrCollegeBatchInfo from './JrCollegeBatchInfo'
import NeetBatchInfo from './NeetBatchInfo'

const WeProvideMenu = ({
  selectedWeProvideMenu,
}: {
  selectedWeProvideMenu: SelectedWeProvideMenuType
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`md:h-full w-fit flex shadow-xl rounded-lg overflow-x-hidden duration-200 
        ${selectedWeProvideMenu === 0 && 'translate-x-0'} 
        ${
          selectedWeProvideMenu === 1 &&
          '-translate-x-[90vw] md:-translate-x-[75vw]'
        } 
        ${
          selectedWeProvideMenu === 2 &&
          '-translate-x-[180vw] md:-translate-x-[150vw]'
        }`}
      >
        <div className='menu-0 h-full md:p-5 w-[90vw] md:w-[75vw] flex flex-col md:flex-row justify-start md:justify-between space-y-5 md:space-y-0 md:space-x-5'>
          {JR_COLLEGE_BATCH_INFO.map((item) => (
            <JrCollegeBatchInfo
              key={item.cardTitle}
              cardTitle={item.cardTitle}
              cardDesc={item.cardDesc}
              eduBoards={item.eduBoards}
              eduSubjects={item.eduSubjects}
              timings={item.timings}
            />
          ))}
        </div>

        <div className='menu-1 h-full md:p-5 w-[90vw] md:w-[75vw] flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-5'>
          {NEET_BATCH_INFO.map((item) => (
            <NeetBatchInfo
              key={item.cardTitle}
              cardTitle={item.cardTitle}
              cardDesc={item.cardDesc}
              programHighlights={item.programHighlights}
              batches={item.batches}
              timings={item.timings}
              className='w-full md:w-1/2'
            />
          ))}
        </div>

        <div className='menu-2 h-full md:p-5 w-[90vw] md:w-[75vw] flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-5'>
          {JR_COLLEGE_BATCH_INFO.map((item) => (
            <JrCollegeBatchInfo
              key={item.cardTitle}
              cardTitle={item.cardTitle}
              cardDesc={item.cardDesc}
              eduBoards={item.eduBoards}
              eduSubjects={item.eduSubjects}
              timings={item.timings}
            />
          ))}
        </div>

        {/* <div className='menu-1 h-full p-5  w-[90vw] md:w-[75vw]'>
          1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Asperiores officia beatae qui, consectetur laborum recusandae corporis
          unde mollitia? Fugiat, cupiditate! Voluptas nihil nesciunt laudantium
          ullam nam quo repudiandae maxime possimus.
        </div>

        <div className='menu-2 h-full p-5  w-[90vw] md:w-[75vw]'>
          2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Asperiores officia beatae qui, consectetur laborum recusandae corporis
          unde mollitia? Fugiat, cupiditate! Voluptas nihil nesciunt laudantium
          ullam nam quo repudiandae maxime possimus.
        </div> */}
      </motion.div>
    </>
  )
}

export default WeProvideMenu
