import {create} from 'zustand';
type State={
    count:number;
}
type Action={
    increamentCount:()=>void;
    decreamentCount:()=>void;
}

export const useStore=create<State & Action>((set)=>({
    count:0,
    increamentCount:()=>set((state)=>({...state,count:state.count+1})),
    decreamentCount:()=>set((state)=>({...state,count:state.count-1}))
}))