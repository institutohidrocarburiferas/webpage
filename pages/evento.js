import { Content } from '@components/Content'
import { Separator } from '@components/Separator'
import { Sidebar } from '@components/Sidebar'
import { items } from '@constants/eventItems'

const pageData = {
  title: 'Evento',
  description: 'Evento',
  image: '/prueba.png',
}

export default function Evento () {
  return (
    <>
    <Content
      title={pageData.title}
      description={pageData.description}
      image={pageData.image}
    >
    <Sidebar items={items}/>
      <main>
        <Separator id="por-que-perspectiva" />
        <div className='w-screen h-40 mx-24'>porque-perspectiva</div>
        <Separator id="ejes-tematicos" />
        <div className='w-screen h-40 mx-24'>ejes-tematicos</div>
        <Separator id="programa" />
        <div className='w-screen h-40 mx-24'>programa</div>
        <Separator id="patrocinadores" />
        <div className='w-screen h-40 mx-24'>patrocinadores</div>
        <Separator id="que-busca-el-evento" />
        <div className='w-screen h-40 mx-24'>que-busca-el-evento</div>
        <Separator id="ponentes" />
        <div className='w-screen h-40 mx-24'>ponentes</div>
        <Separator id="registro" />
        <div className='w-screen h-40 mx-24'>registro</div>
      </main>
    </Content>
    </>
  )
}
