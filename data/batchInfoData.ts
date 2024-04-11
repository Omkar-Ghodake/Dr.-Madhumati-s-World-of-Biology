import { JrCollegeBatchInfo, NeetBatchInfo } from '@/types/dataTypes'

export const JR_COLLEGE_BATCH_INFO: JrCollegeBatchInfo[] = [
  {
    cardTitle: 'Class 11th',
    cardDesc:
      'Immerse yourself in biology with tailored coaching for 11th-grade students, focusing on key concepts led by experienced faculty for exam success.',
    eduBoards: ['MH State Board', 'CBSE', 'NCERT'],
    eduSubjects: ['Biology'],
    timings: 'Two Hours',
  },
  {
    cardTitle: 'Class 12th',
    cardDesc:
      'Explore advanced biology topics in sessions designed for 12th-grade students, featuring practical demonstrations and personalized guidance for academic excellence.',
    eduBoards: ['MH State Board', 'CBSE', 'NCERT'],
    eduSubjects: ['Biology'],
    timings: 'Two Hours',
  },
]

export const NEET_BATCH_INFO: NeetBatchInfo[] = [
  {
    cardTitle: 'About the Course',
    cardDesc:
      'Prepare effectively for the NEET exam with our specialized biology coaching. Our program covers key concepts, problem-solving skills, and offers regular assessments for progress tracking. Experienced faculty provide personalized guidance and a wealth of study resources.',
    programHighlights: [
      'Tailored coaching specifically for NEET exam preparation.',
      'Comprehensive coverage of key biology concepts and topics.',
      'Regular practice tests and assessments to track progress and improve performance.',
      'Personalized guidance and support from experienced faculty members.',
      'Access to a wealth of study resources, including textbooks, notes, and practice questions.',
    ],
  },
  {
    cardTitle: 'Batches',
    cardDesc: '',
    timings: 'Two Hours',
    batches: [
      {
        title: 'NEET Regular',
        eduBoards: ['MH State Board', 'CBSE', 'NCERT'],
        eduSubjects: ['Biology'],
      },
      {
        title: 'NEET Repeat',
        eduBoards: ['MH State Board', 'CBSE', 'NCERT'],
        eduSubjects: ['Biology'],
      },
    ],
  },
]
