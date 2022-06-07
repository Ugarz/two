import { NextPage } from "next";

interface Props {
  free: boolean;
}

const Currently: NextPage<Props> = (props) => {
  const { free } = props;

  return (
    <>
      {free &&
        <p>
          <em className='bg-emerald-500 px-2 py-0.5 mx-2 rounded-sm'>Available</em>- Currently looking for new opportunities!
        </p>

      }
      {!free &&
        <p>
          <em className='bg-red-500 px-2 py-0.5 mx-2 rounded-sm'>Not Available</em>- I'm <u><b>not</b></u> looking for new opportunities!
        </p>

      }
    </>
  );
}

export default Currently;