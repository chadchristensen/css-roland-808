import './App.css'
import ChannelLabel from './components/ChannelLabel'
import DrumPad from './components/DrumPad'
import Knob from './components/Knob'
import LightIndicator from './components/LightIndicator'
import PreScaleSection from './components/PreScaleSection'
import RectangularSwitch from './components/RectangularSwitch'
import SoundChannel from './components/SoundChannel'

const COLORS = {
  BG_RED: 'bg-red-500',
  BG_ORANGE: 'bg-orange-400',
  BG_YELLOW: 'bg-yellow-400',
  BG_IVORY: 'bg-yellow-100',
  GRAY: 'gray-400',
  GRAY_HEX: '#9ca3af'
}

const SEMIBOLD_12PX = 'text-[12px] font-semibold';

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
        <DrumPad color={color} />
      </div>
    )
  })
}

function App() {

  return (
    <div className='bg-slate-800 rounded p-6 grid grid-cols-16 gap-x-2'>
      <div className='col-span-16 h-16'></div>
      {/* <h1 className='text-red-500 col-span-16'>Roland 808 Drum Machine</h1> */}
      <div className='col-span-4'>
        <div className='flex'>
          <Knob
            diameter={16}
            ringWidth="20"
            ringColor={COLORS.GRAY_HEX}
            label='Tempo'
            labelTextSize={CHANNEL_KNOB_SIZE}
            bodyColor='#030712'
            indicatorColor="#ef4444"
          />
        </div>
      </div>
      <div className='col-span-12'>
        <div className='grid grid-cols-12 border-t-4 border-gray-400'>
          <SoundChannel>
            <Knob
              label='LEVEL'
              labelTextSize={CHANNEL_KNOB_SIZE}
              bodyColor='#ef4444'
            />
            <ChannelLabel><span className={SEMIBOLD_12PX}>AC</span>cent</ChannelLabel>
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
              <span className={SEMIBOLD_12PX}>B</span>ass<span className={SEMIBOLD_12PX}>D</span>rum
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
              <span className={SEMIBOLD_12PX}>S</span>nare<span className={SEMIBOLD_12PX}>D</span>rum
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
            <div className='flex flex-col'>
              <ChannelLabel><span className={SEMIBOLD_12PX}>L</span>ow<span className={SEMIBOLD_12PX}>C</span>onga</ChannelLabel>
              <RectangularSwitch />
              <ChannelLabel><span className={SEMIBOLD_12PX}>L</span>ow<span className={SEMIBOLD_12PX}>T</span>om</ChannelLabel>
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

            <div className='flex flex-col'>
              <ChannelLabel><span className={SEMIBOLD_12PX}>M</span>id<span className={SEMIBOLD_12PX}>C</span>onga</ChannelLabel>
              <RectangularSwitch />
              <ChannelLabel><span className={SEMIBOLD_12PX}>M</span>id<span className={SEMIBOLD_12PX}>T</span>om</ChannelLabel>
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
            <div className='flex flex-col'>
              <ChannelLabel><span className={SEMIBOLD_12PX}>H</span>i<span className={SEMIBOLD_12PX}>C</span>onga</ChannelLabel>
              <RectangularSwitch />
              <ChannelLabel><span className={SEMIBOLD_12PX}>H</span>i<span className={SEMIBOLD_12PX}>T</span>om</ChannelLabel>
            </div>
          </SoundChannel>
          <SoundChannel>
            <Knob
              label='LEVEL'
              labelTextSize={CHANNEL_KNOB_SIZE}
              bodyColor='#ef4444'
            />
            <div className='flex flex-col'>
              <ChannelLabel><span className={SEMIBOLD_12PX}>CL</span>aves</ChannelLabel>
              <RectangularSwitch />
              <ChannelLabel><span className={SEMIBOLD_12PX}>R</span>im<span className={SEMIBOLD_12PX}>S</span>hot</ChannelLabel>
            </div>
          </SoundChannel>
          <SoundChannel>
            <Knob
              label='LEVEL'
              labelTextSize={CHANNEL_KNOB_SIZE}
              bodyColor='#ef4444'
            />
            <div className='flex flex-col'>
              <ChannelLabel><span className={SEMIBOLD_12PX}>MA</span>racas</ChannelLabel>
              <RectangularSwitch />
              <ChannelLabel><span className={SEMIBOLD_12PX}>H</span>and<span className={SEMIBOLD_12PX}>C</span>laP</ChannelLabel>
            </div>
          </SoundChannel>
          <SoundChannel>
            <Knob
              label='LEVEL'
              labelTextSize={CHANNEL_KNOB_SIZE}
              bodyColor='#ef4444'
            />

            <ChannelLabel><span className={SEMIBOLD_12PX}>C</span>ow<span className={SEMIBOLD_12PX}>B</span>ell</ChannelLabel>
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
            <ChannelLabel><span className={SEMIBOLD_12PX}>CY</span>mbal</ChannelLabel>
          </SoundChannel>
          <SoundChannel>
            <Knob
              label='LEVEL'
              labelTextSize={CHANNEL_KNOB_SIZE}
              bodyColor='#ef4444'
            />

            <Knob
              label='DECAY'
              labelTextSize={CHANNEL_KNOB_SIZE}
              bodyColor='#fefce8'
            />
            <ChannelLabel><span className={SEMIBOLD_12PX}>O</span>pen<span className={SEMIBOLD_12PX}>H</span>ihat</ChannelLabel>
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
            <ChannelLabel><span className={SEMIBOLD_12PX}>C</span>lsd<span className={SEMIBOLD_12PX}>H</span>ihat</ChannelLabel>
          </SoundChannel>
        </div>
      </div>

      <div className='col-span-4'>

      </div>
      <div className='col-span-12 h-20 border-x-2 border-gray-400'>
        <div>
          <Knob
            diameter={8}
            label='Master Volume'
            labelTextSize='font-[10px]'
            bodyColor='#030712'
            indicatorColor='#ef4444'
          />
        </div>

      </div>


      <div className='col-span-16 bg-gray-400 h-2 my-3'></div>

      <div className='col-span-2 bg-gray-400 rounded-sm'>

      </div>

      <div className='col-span-2'>
        <LightIndicator />
        <p className='text-gray-300 text-sm' >1st PART</p>
        <LightIndicator />
        <p className='text-gray-300 text-sm' >2nd PART</p>
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

      <div className='col-span-2 bg-gray-400 rounded-sm'>

      </div>

      <div className='h-6 col-span-12 bg-gray-400 rounded-sm'>
        {/* {
            Array.from({ length: 12 }).map((_, i) => (
              <span className='inline-block mx-5 font-bold'>{i + 1}</span>
            ))
          } */}
      </div>

      <div className='h-6 col-span-4 bg-gray-400 rounded-sm'>

      </div>

    </div >
  )
}

export default App
