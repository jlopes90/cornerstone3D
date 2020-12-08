import IViewportUID from './../IViewportUID';
import ISetToolModeOptions from './ISetToolModeOptions';

export default interface IToolGroup {
  // Unserializable instantiated tool classes, keyed by name
  _tools: Record<string, any>;
  id: string;
  viewports: Array<IViewportUID>;
  tools: Record<string, any>;
  //
  addTool: { (toolName: string, toolOptions?: any): void };
  addViewports: {
    (renderingEngineUID: string, sceneUID?: string, viewportUID?: string): void;
  };
  // ~ setToolMode
  setToolActive: {
    (toolName: string, toolModeOptions: ISetToolModeOptions): void;
  };
  // ~ setToolMode
  setToolPassive: {
    (toolName: string, toolModeOptions: ISetToolModeOptions): void;
  };
}
