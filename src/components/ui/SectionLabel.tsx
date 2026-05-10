export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className='section-label'>
      <span className='section-label-num'>{num}</span>
      {label}
      <span className='section-label-line' />
    </div>
  );
}
