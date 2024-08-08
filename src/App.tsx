import './App.css'
import ChannelLabel from './components/ChannelLabel'
import DrumPad from './components/DrumPad'
import HorizontalToggle from './components/HorizontalToggle'
import Knob from './components/Knob'
import LightIndicator from './components/LightIndicator'
import PreScaleSection from './components/PreScaleSection'
import RectangularSwitch from './components/RectangularSwitch'
import SoundChannel from './components/SoundChannel'

const COLORS = {
  BG_RED: 'bg-red-500',
  BG_ORANGE: 'bg-orange-400',
  BG_YELLOW: 'bg-yellow-400',
  BG_IVORY: 'bg-yellow-50',
  GRAY: 'gray-400',
  GRAY_HEX: '#9ca3af'
}

const SEMIBOLD_10PX = 'text-[10px] font-semibold';

const CHANNEL_KNOB_SIZE = 'text-[8px]';

function renderDrumPads() {
  return Array.from({ length: 16 }).map((_, i) => {
    let color = '';

    if (i < 4) {
      color = COLORS.BG_RED;
    } else if (i < 8) {
      color = COLORS.BG_ORANGE;
    } else if (i < 12) {
      color = COLORS.BG_YELLOW;
    } else {
      color = COLORS.BG_IVORY;
    }

    return (
      <div key={`${i}-color`}>
        <div className='text-white text-xs mb-1 font-semibold'>{i + 1}</div>
        <DrumPad color={color} idx={i} />
      </div>
    )
  })
}

function App() {

  return (
    <>
      <h1 className='text-[3em] font-bold mb-8'>Roland 808 Drum Machine</h1>
      <div className='bg-slate-800 rounded p-6 grid grid-cols-16 gap-x-2'>
        <div className='col-span-16 h-14 flex my-2'>
          <div className='flex flex-col items-center gap-1 ml-6'>
            <span className='uppercase text-gray-200 text-[10px]'>Power</span>
            <button className='w-12 h-8 bg-black rounded-sm'></button>
          </div>
        </div>
        <div className='col-span-16 h-1 bg-gray-400 mb-1'></div>
        <div className='col-span-4 flex justify-around'>
          <div className='flex flex-col justify-between'>
            <Knob
              label='pattern write'
              diameter={8}
              ringColor='#374151'
              bodyColor='#030712'
              indicatorColor="#ef4444"
            />
            <Knob
              diameter={16}
              ringColor={COLORS.GRAY_HEX}
              label='Tempo'
              labelTextSize={CHANNEL_KNOB_SIZE}
              bodyColor='#030712'
              indicatorColor="#ef4444"
            />
          </div>
          <div className='flex flex-col justify-between'>
            <Knob
              label='Instrument Select'
              diameter={8}
              ringColor='#374151'
              bodyColor='#030712'
              indicatorColor="#ef4444"
            />
            <Knob
              label='Autofill In'
              labelPosition='bottom'
              diameter={8}
              ringColor='#374151'
              bodyColor='#030712'
              indicatorColor="#ef4444"
            />
            <Knob
              label='Fine'
              diameter={8}
              ringColor='#374151'
              bodyColor='#030712'
              indicatorColor="#ef4444"
            />
          </div>
        </div>
        <div className='col-span-12'>
          <div className='grid grid-cols-12 border-l-2 border-gray-400'>
            <SoundChannel>
              <Knob
                label='LEVEL'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#ef4444'
              />
              <ChannelLabel><span className={SEMIBOLD_10PX}>AC</span>cent</ChannelLabel>
            </SoundChannel>
            <SoundChannel>
              <Knob
                label='LEVEL'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#ef4444'
              />
              <Knob
                label='TONE'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#fefce8'
              />
              <Knob
                label='DECAY'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#fefce8'
              />
              <ChannelLabel>
                <span className={SEMIBOLD_10PX}>B</span>ass<span className={SEMIBOLD_10PX}>D</span>rum
              </ChannelLabel>
            </SoundChannel>
            <SoundChannel>
              <Knob
                label='LEVEL'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#ef4444'
              />
              <Knob
                label='TONE'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#fefce8'
              />
              <Knob
                label='SNAPPY'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#fefce8'
              />
              <ChannelLabel>
                <span className={SEMIBOLD_10PX}>S</span>nare<span className={SEMIBOLD_10PX}>D</span>rum
              </ChannelLabel>
            </SoundChannel>
            <SoundChannel>
              <Knob
                label='LEVEL'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#ef4444'
              />
              <Knob
                label='TUNING'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#fefce8'
              />
              <div className='flex flex-col mt-3.5'>
                <ChannelLabel><span className={SEMIBOLD_10PX}>L</span>ow<span className={SEMIBOLD_10PX}>C</span>onga</ChannelLabel>
                <RectangularSwitch />
                <ChannelLabel><span className={SEMIBOLD_10PX}>L</span>ow<span className={SEMIBOLD_10PX}>T</span>om</ChannelLabel>
              </div>
            </SoundChannel>
            <SoundChannel>
              <Knob
                label='LEVEL'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#ef4444'
              />
              <Knob
                label='TUNING'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#fefce8'
              />

              <div className='flex flex-col mt-3.5'>
                <ChannelLabel><span className={SEMIBOLD_10PX}>M</span>id<span className={SEMIBOLD_10PX}>C</span>onga</ChannelLabel>
                <RectangularSwitch />
                <ChannelLabel><span className={SEMIBOLD_10PX}>M</span>id<span className={SEMIBOLD_10PX}>T</span>om</ChannelLabel>
              </div>
            </SoundChannel>
            <SoundChannel>
              <Knob
                label='LEVEL'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#ef4444'
              />
              <Knob
                label='TUNING'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#fefce8'
              />
              <div className='flex flex-col mt-3.5'>
                <ChannelLabel><span className={SEMIBOLD_10PX}>H</span>i<span className={SEMIBOLD_10PX}>C</span>onga</ChannelLabel>
                <RectangularSwitch />
                <ChannelLabel><span className={SEMIBOLD_10PX}>H</span>i<span className={SEMIBOLD_10PX}>T</span>om</ChannelLabel>
              </div>
            </SoundChannel>
            <SoundChannel>
              <Knob
                label='LEVEL'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#ef4444'
              />
              <div className='flex flex-col'>
                <ChannelLabel><span className={SEMIBOLD_10PX}>CL</span>aves</ChannelLabel>
                <RectangularSwitch />
                <ChannelLabel><span className={SEMIBOLD_10PX}>R</span>im<span className={SEMIBOLD_10PX}>S</span>hot</ChannelLabel>
              </div>
            </SoundChannel>
            <SoundChannel>
              <Knob
                label='LEVEL'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#ef4444'
              />
              <div className='flex flex-col'>
                <ChannelLabel><span className={SEMIBOLD_10PX}>MA</span>racas</ChannelLabel>
                <RectangularSwitch />
                <ChannelLabel><span className={SEMIBOLD_10PX}>H</span>and<span className={SEMIBOLD_10PX}>C</span>laP</ChannelLabel>
              </div>
            </SoundChannel>
            <SoundChannel>
              <Knob
                label='LEVEL'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#ef4444'
              />

              <ChannelLabel><span className={SEMIBOLD_10PX}>C</span>ow<span className={SEMIBOLD_10PX}>B</span>ell</ChannelLabel>
            </SoundChannel>
            <SoundChannel>
              <Knob
                label='LEVEL'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#ef4444'
              />
              <Knob
                label='TONE'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#fefce8'
              />
              <Knob
                label='DECAY'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#fefce8'
              />
              <ChannelLabel><span className={SEMIBOLD_10PX}>CY</span>mbal</ChannelLabel>
            </SoundChannel>
            <SoundChannel>
              <Knob
                label='LEVEL'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#ef4444'
              />
              <Knob
                label='.'
                labelTextSize={CHANNEL_KNOB_SIZE}
                indicatorColor='transparent'
                ringColor='transparent'
                bodyColor='transparent'
              />

              <Knob
                label='DECAY'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#fefce8'
              />
              <ChannelLabel><span className={SEMIBOLD_10PX}>O</span>pen<span className={SEMIBOLD_10PX}>H</span>ihat</ChannelLabel>
            </SoundChannel>
            <SoundChannel>
              <Knob
                label='LEVEL'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#ef4444'
              />
              <Knob
                label='TONE'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#fefce8'
              />
              <Knob
                label='SNAPPY'
                labelTextSize={CHANNEL_KNOB_SIZE}
                bodyColor='#fefce8'
              />
              <ChannelLabel><span className={SEMIBOLD_10PX}>C</span>lsd<span className={SEMIBOLD_10PX}>H</span>ihat</ChannelLabel>
            </SoundChannel>
          </div>
        </div>

        <div className='col-span-4'>

        </div>
        <div className='flex justify-end items-end col-span-12 px-1 pt-4 border-x-2 border-gray-400'>
          <div className='w-full text-right'>
            <div className='border-b-2 border-red-500 text-red-500 px-8' >
              <span className='font-semibold text-lg'>Rhythm Composer <span className='ml-4'>TR-808</span></span>
            </div>
            <span className='text-gray-400 text-sm px-8'>Computer Controlled</span>
          </div>

          <div className='w-24'>
            <Knob
              diameter={8}
              label='Master Volume'
              labelPosition='bottom'
              ringColor='#374151'
              ringRadiusPercentage='60%'
              labelTextSize={CHANNEL_KNOB_SIZE}
              bodyColor='#030712'
              indicatorColor='#ef4444'
            />
          </div>
        </div>


        <div className='col-span-16 bg-gray-400 h-2 my-3'></div>

        <div className='flex flex-col justify-between items-center p-2 col-span-2 bg-gray-400 rounded-t-sm'>
          <div className='flex flex-col items-center border-b-2 border-gray-800 w-full pb-2'>
            <span className='text-[10px] uppercase font-semibold'>Basic-Variation</span>
            <HorizontalToggle width='12' />
            <div className='flex justify-between text-[10px] w-12 mb-1'><span>A</span> <span>AB</span> <span>B</span></div>
            <div className='flex justify-center'>
              <div className='flex justify-between p-1 bg-black w-14 rounded-sm'>
                <LightIndicator /> <LightIndicator />

              </div>
            </div>
          </div>
          <button className="text-center justify-center h-10 w-24 bg-yellow-100 rounded-sm">
            <span className='block text-[10px] font-semibold'>START</span>
            <span className='block h-[1px] w-11/12 bg-black m-auto'></span>
            <span className='block text-[10px] font-semibold '>STOP</span>
          </button>
        </div>

        <div className='col-span-2 flex flex-col justify-between items-center'>
          <div className='flex flex-col justify-center'>
            <span className='text-gray-300 text-[10px] uppercase'>pre-scale</span>
            <RectangularSwitch height='12' />
          </div>
          <div>
            <div>
              <LightIndicator />
              <p className='text-gray-300 text-[10px] font-semibold' >1st PART</p>
            </div>
            <div>
              <LightIndicator />
              <p className='text-gray-300 text-[10px] font-semibold' >2nd PART</p>
            </div>
          </div>
        </div>

        <div className='col-span-10 grid grid-cols-16 gap-x-3 gap-y-1 w-full my-2'>
          <PreScaleSection colSpanClass="col-span-3" />
          <PreScaleSection colSpanClass="col-span-3" />
          <PreScaleSection colSpanClass="col-span-3" />
          <PreScaleSection colSpanClass="col-span-3" />
          <PreScaleSection colSpanClass="col-span-3" />
          <PreScaleSection colSpanClass="col-span-1" />
          <PreScaleSection colSpanClass="col-span-6" />
          <PreScaleSection colSpanClass="col-span-6" />
          <PreScaleSection colSpanClass="col-span-4" />
          <PreScaleSection colSpanClass="col-span-4" />
          <PreScaleSection colSpanClass="col-span-4" />
          <PreScaleSection colSpanClass="col-span-4" />
          <PreScaleSection colSpanClass="col-span-4" />
          <PreScaleSection colSpanClass='col-span-8' />
          <PreScaleSection colSpanClass='col-span-8' />
          {renderDrumPads()}
        </div>

        <div className='flex flex-col justify-between items-center col-span-2 p-2 bg-gray-400 rounded-t-sm'>
          <div className='flex flex-col items-center border-b-2 border-gray-800 w-full pb-2'>
            <span className='text-[10px] font-semibold'>I / F Variation</span>
            <HorizontalToggle />
            <div className='flex justify-between w-6 text-[10px]'><span>A</span> <span>B</span></div>
          </div>
          <div className='w-full'>
            <span className='block text-[10px] font-semibold uppercase'>Intro Set</span>
            <span className='block h-[1px] bg-black m-auto'></span>
            <span className='block text-[10px] font-semibold uppercase'>Fill In Trigger</span>
          </div>
          <button className='text-center h-8 w-8 bg-yellow-100 rounded-sm mb-2 justify-self-end uppercase text-[8px] font-semibold'>Tap</button>
        </div>

        <div className='h-6 col-span-12 bg-gray-400 rounded-r-sm rounded-bl-sm'>
          {/* {
            Array.from({ length: 12 }).map((_, i) => (
              <span className='inline-block mx-5 font-bold'>{i + 1}</span>
            ))
          } */}
        </div>

        <div className='h-6 col-span-4 bg-gray-400 rounded-l-sm rounded-br-sm'>

        </div>

      </div >
    </>
  )
}

export default App
