
import { Icon } from '../../Icon';
import { useAudio } from 'react-use';
import { secondsToTime } from '../../utils';
import CustomRange from '../CustomRange';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setControls, setPlaying, setSidebar } from '../../app/player';

const Player = ({ item }) => {
    const dispatch = useDispatch()

    const { current, sidebar } = useSelector(state => state.player)

    console.log({ current });
    const [audio, state, controls] = useAudio({
        src: current?.src,
    });

    useEffect(() => {
        controls.play()
    }, [current])

    useEffect(() => {
        dispatch(setControls(controls))
    }, [])


    useEffect(() => {
        dispatch(setPlaying(state.playing))
    }, [state.playing])


    const volumeIcon = useMemo(() => {
        if (state.volume === 0 || state.muted)
            return 'volumemuted'

        if (state.volume > 0 && state.volume < 0.33)
            return 'volumelow'

        if (state.volume >= 0.33 && state.volume < 0.66)
            return 'volumenormal'
        return 'volumefull'
    }, [state.volume, state.muted])

    return (
        <div className='flex items-center justify-between h-full px-4'>
            <div className='min-w-[11.25rem] w-[30%] '>
                <div className='flex items-center'>
                    {current && (
                        <div className='flex items-center mr-3'>
                            {!sidebar && (
                                <div className='w-14 h-14 mr-[14px] group relative'>
                                    <img src={current.image} alt="" />
                                    <button className='w-6 h-6 bg-black bg-opacity-80 rounded-full flex items-center justify-center absolute top-1 right-1 opacity-0 hover:scale-105 group-hover:opacity-100 '
                                        onClick={() => dispatch(setSidebar(true))}
                                    >
                                        <Icon size={16} name="arrowleft" />
                                    </button>
                                </div>
                            )}
                            <div className='flex flex-col'>
                                <span className='hover:underline text-sm font-normal line-clamp-1'>{current.title}</span>
                                <span className='font-normal text-[11px] text-link'>{current.artist_Name}</span>
                            </div>
                        </div>
                    )}
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon size={16} name="heartfiled" />
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon size={16} name="pictureinpicture" />
                    </button>
                </div>
            </div>
            <div className='max-w-[45.125rem] w-[40%] flex flex-col items-center'>
                <div className='flex items-center gap-x-2'>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon size={16} name="Shuffle" />
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon size={16} name="playerprev" />
                    </button>
                    <button className='w-8 h-8 bg-white rounded-3xl flex items-center justify-center text-black duration-75 hover:text-opacity-100 hover:scale-[1.06]'
                        onClick={controls[state?.playing ? 'pause' : 'play']}>
                        <Icon size={16} name={state?.playing ? 'pause' : 'play'} />
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon size={16} name="playernext" />
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon size={16} name="repeat" />
                    </button>
                </div>
                <div className='w-full flex items-center gap-x-2'>
                    {audio}
                    <div className='text-[0.688rem] text-white text-opacity-70'>
                        {secondsToTime(state?.time)}
                    </div>

                    <CustomRange
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        value={state?.time}
                        onChange={value => controls.seek(value)}
                    />

                    <div className='text-[0.688rem] text-white text-opacity-70'>
                        {secondsToTime(state?.duration)}
                    </div>
                </div>
            </div>
            <div className='min-w-[11.25rem] w-[30%] flex justify-end'>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon size={16} name="lyrisc" />
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon size={16} name="quaque" />
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon size={16} name="device" />
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'
                    onClick={controls[state?.muted ? 'unmute' : 'mute']}
                >
                    <Icon size={16} name={volumeIcon} />
                </button>
                <div className='w-[93px] max-w-full'>
                    {audio}
                    <CustomRange
                        step={0.01}
                        min={0}
                        max={1}
                        value={state?.muted ? 0 : state?.volume}
                        onChange={value => {
                            controls.unmute()
                            controls.volume(value)
                        }}
                    />
                </div>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon size={16} name="fullscreen" />
                </button>
            </div>
        </div>
    );
};

export default Player;