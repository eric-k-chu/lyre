import { Dropzone } from '@mantine/dropzone'
import { FileIcon, ValueNoneIcon, VideoIcon } from '@radix-ui/react-icons'
import type { ReactElement } from 'react'

export function Download(): ReactElement {
  return (
    <Dropzone
      onDrop={(files) => {
        console.log(files)
      }}
      accept={{
        'video/*': ['*'],
      }}
    >
      <div className='pointer-events-none flex min-h-96 flex-col items-center justify-center gap-xl bg-red-400/10'>
        <Dropzone.Accept>
          <FileIcon />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <ValueNoneIcon />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <VideoIcon />
        </Dropzone.Idle>
        <div>
          <p className='text-xl'>Drag videos here or click to select files.</p>
        </div>
      </div>
    </Dropzone>
  )
}
