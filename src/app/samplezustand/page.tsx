import Counter from '@/app/_components/Counter';
import CounterLog from '@/app/_components/CounterLog';
import AnotherComponent from '@/app/_components/DataAnotherLog';
import DataList from '@/app/_components/DataList';
import DataLog from '@/app/_components/DataLog';
import UserInfo from '@/app/_components/UserInfo';
const SampleZustandPage = () => {
  return (
    <>
      <Counter />
      <UserInfo />
      <DataList />
      <CounterLog />
      <DataLog />
      <AnotherComponent />
    </>
  );
};

export default SampleZustandPage;
