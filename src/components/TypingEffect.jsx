import { Typewriter } from 'react-simple-typewriter';

export default function TypingEffect() {
  return (
    <h2 className="text-2xl md:text-3xl text-teal-400 font-space font-semibold text-center">
      We specialize in{' '}
      <span className="text-white">
        <Typewriter
          words={[
            'Website Development',
            'Ad Creative + Copywriting',
            'Short-form Video Editing',
            'Graphic Design',
          ]}
          loop={0} // 0 = Infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h2>
  );
}
