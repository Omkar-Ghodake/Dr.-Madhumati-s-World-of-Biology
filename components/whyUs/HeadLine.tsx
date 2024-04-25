import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { Button } from '../ui/button'
import Link from 'next/link'

const HeadLine = () => {
  return (
    <MaxWidthWrapper className='pt-16'>
      <div className='flex flex-col justify-center h-[75vh] space-y-12'>
        <h1 className='text-center text-6xl capitalize font-bold drop-shadow-lg'>
          Wondering why choose us?
        </h1>

        <div className='text-center text-secondary-foreground font-medium'>
          <p className='w-2/3 mx-auto'>
            <span className='text-3xl'>Discover Why</span>{' '}
            <span className='text-5xl text-primary font-semibold'>
              {' '}
              Dr. Madhutmati&apos;s World of Biology{' '}
            </span>
            <span className='text-3xl'>Is the Top Pick for </span>{' '}
            <span className='text-5xl text-primary font-semibold'>
              Aspiring Biologists
            </span>
            <span>.</span>
          </p>
        </div>

        <Button
          className='w-fit mx-auto text-2xl font-semibold py-7 px-10 shadow-lg'
          variant={'secondary'}
          size={'lg'}
          asChild
        >
          <Link href={'#content'}>DISCOVER WITH US</Link>
        </Button>
      </div>

      <div className='mt-20' id='content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed excepturi
        doloremque quos? Nemo sed velit id dicta necessitatibus, quos quod rem
        laudantium, facilis voluptatum facere, aspernatur sunt. Autem, magni
        eveniet dolorem sint, ab tempora tempore delectus minima, error
        laudantium nobis impedit dicta distinctio fugit molestiae illum labore
        excepturi neque dolor eum amet! Expedita enim soluta omnis a eum ipsum
        aliquid at voluptatem eos, ipsam fugiat ea et minima blanditiis dicta
        corporis odit voluptates neque dolorum natus veritatis obcaecati. A ad
        autem sapiente id voluptatibus rerum at sequi quidem aut dolorem
        quibusdam impedit deserunt ex optio hic illo, incidunt laborum repellat
        sunt illum velit! Possimus, veniam ipsum suscipit, facilis sed voluptate
        repudiandae exercitationem culpa repellendus nulla aliquam natus
        dignissimos omnis id laborum odio tempore aut deserunt! Alias,
        doloremque. Obcaecati assumenda iure adipisci reprehenderit vel placeat
        quidem neque voluptas animi, eos temporibus, odit libero! Autem dolorem
        tempora, adipisci accusantium nostrum corporis iusto ad sequi, nisi
        voluptas explicabo commodi cumque at porro ipsa necessitatibus,
        voluptate reprehenderit molestiae fuga ex asperiores laboriosam
        voluptatem amet? Illo accusantium mollitia placeat quos aut porro.
        Aperiam dolor dolorem, voluptas sunt provident aliquid excepturi
        eligendi suscipit commodi ipsum delectus incidunt praesentium magnam sit
        voluptate, corrupti dignissimos itaque alias in! Consequatur distinctio
        ratione repudiandae nobis veritatis perferendis exercitationem. Deserunt
        ipsum nostrum dignissimos consectetur asperiores earum illum officia,
        cum, odio quod doloremque vitae distinctio minus fugit inventore
        voluptas? Ratione iusto minus maxime eos, velit, iste corrupti vel nisi
        dolor error beatae. Rerum doloribus quibusdam voluptatem, veniam
        perferendis vitae laudantium sed optio alias suscipit ducimus laborum
        perspiciatis. Magni fugiat ipsum, consectetur omnis sint minus
        consequatur sunt illo quos commodi totam dignissimos fuga cum aut rerum
        officiis eligendi voluptas quod ipsam nobis iste sequi ducimus! Ullam
        repellat vel ad culpa quis blanditiis eum provident corrupti dignissimos
        laudantium explicabo, iusto, doloribus assumenda quia inventore rem
        porro praesentium? Illo expedita atque rerum id non nesciunt suscipit a
        totam assumenda dolore? Corrupti atque voluptatum, eveniet fuga quaerat
        dolorem architecto, explicabo possimus soluta animi pariatur minima.
        Voluptatum ullam cumque porro esse eveniet, aut consequuntur ipsam
        aliquid, nobis facilis quaerat aspernatur repudiandae assumenda
        molestias? Dolor incidunt ad iste neque iusto, labore repellendus non
        enim nam molestias, sit deleniti provident aliquam amet officia. Debitis
        odio ex quod obcaecati aspernatur at perspiciatis consequuntur saepe
        eveniet. Dolorem voluptatem omnis nisi, sint quisquam quia eos ab
        mollitia veritatis laudantium veniam officiis quo et, pariatur quam
        laboriosam ea ipsum, perferendis doloremque consectetur nobis nam.
        Maxime id rem nostrum aliquid porro tempora totam animi fugit,
        repudiandae, praesentium exercitationem quaerat ad fuga? Eius
        exercitationem corrupti quidem, quo commodi labore illo velit? Quia aut,
        impedit mollitia labore, ullam deserunt nesciunt autem suscipit
        reprehenderit consequuntur accusamus exercitationem, tenetur optio
        tempore voluptatum repellat dicta! Voluptas optio, eos tenetur, qui ut
        iusto ab alias consectetur reiciendis veniam animi nemo recusandae,
        deleniti tempora quae debitis. Accusantium voluptate dolores nesciunt
        minus maiores aut aspernatur maxime ullam reiciendis ex eligendi neque
        placeat, nihil consectetur. Aliquam, cupiditate? Reiciendis nesciunt
        totam officia, fuga ex, laborum inventore repellendus dolorum natus,
        veniam maiores non eius quia.
      </div>
    </MaxWidthWrapper>
  )
}

export default HeadLine
