import { test } from 'vitest';
import { SchaleApi } from '../schale-api';
import { Logger, LoggerFactory } from 'log4ts';

const logger: Logger = LoggerFactory.getLogger("schale-api-test")!;
const api = new SchaleApi();

test("获取学生数据", async () => {
  const students = await api.getStudents();
  logger.info(`成功获取学生数据${students.length}条`);
});

test("获取物品数据", async () => {
  const items = await api.getItems();
  logger.info(`成功获取物品数据${items.length}条`);
});
